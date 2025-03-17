import { useState, useEffect } from 'react'
import ActionButton from '../buttons/ActionButton'
import { FaSave, FaTimes } from 'react-icons/fa'
import { useProducts } from '../../context/ProductContext'

const ProductForm = ({ product, onClose }) => {
  const { addProduct, updateProduct, error } = useProducts()
  
  // données initiale
  const initialState = {
    produit: '',
    unite: 'Unités',
    qteCommandee: 0,
    qteRestante: 0,
    prixUnitaire: 0,
    prixTotal: 0
  }
  
  const [formData, setFormData] = useState(initialState)
  const [validationErrors, setValidationErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  // modifier les valeurs des state dans form aprés que les states change
  useEffect(() => {
    if (product) {
      setFormData({
        produit: product.produit || '',
        unite: product.unite || 'Unités',
        qteCommandee: product.qteCommandee || 0,
        qteRestante: product.qteRestante || 0,
        prixUnitaire: product.prixUnitaire || 0,
        prixTotal: product.prixTotal || 0
      })
    }
  }, [product])

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    
    //   parse les valeurs numerique
    let parsedValue = value
    if (['qteCommandee',  'qteRestante', 'prixUnitaire'].includes(name)) {
      parsedValue= parseFloat(value) || 0
    }
    
    setFormData(prev => {
      const newData = { ...prev, [name]: parsedValue }
      
      // calculer total price automatiquement
      if (name === 'qteCommandee' || name === 'prixUnitaire') {
        newData.prixTotal = newData.qteCommandee * newData.prixUnitaire
      }
      
      return newData
    })
  }

  //  Valider form data
  const validate = () => {
    let newErrors = {}
    
    if (!formData.produit.trim()) {
        newErrors.produit = "Le nom du produit est requis"
    }
    
    if (!formData.unite) {
      newErrors.unite = "L'unité est requise"
    }
     if (formData.qteCommandee <= 0) {
      newErrors.qteCommandee = "La quantité doit être supérieure à 0"
    }
    
    if (formData.prixUnitaire <= 0) {
      newErrors.prixUnitaire = "Le prix unitaire doit être supérieur à 0"
    }
    
    setValidationErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  //  form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) return
    
    setSubmitting(true)
    try {
      if (product?.id) {
        await updateProduct(product.id, formData)
      } else {
        await addProduct(formData)
      }
      onClose()
    } catch (err) {
      // API error   generer dans context
       console.error('Form submission error:', err)
      if (error) {
        alert(error)
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        {product?.id ? 'Modifier le produit' : 'Ajouter un produit'}
      </h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Produit</label>
            <input type="text" name="produit" value={formData.produit} onChange={handleChange} className={`w-full p-2 border rounded ${validationErrors.produit ? 'border-red-500' : 'border-gray-300'}`}/>
          {validationErrors.produit && <p className="text-red-500 text-xs mt-1">{validationErrors.produit}</p>}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Unité</label>
          <select name="unite" value={formData.unite} onChange={handleChange} className={`w-full p-2 border rounded ${validationErrors.unite ? 'border-red-500' : 'border-gray-300'}`}>
            <option value="Unités">Unités</option>
             <option value="Heures">Heures</option>
            <option value="Jours">Jours</option>
            <option value="Kg">Kg</option>
          </select>
          {validationErrors.unite && <p className="text-red-500 text-xs mt-1">{validationErrors.unite}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantité commandée</label>
             < input type="number" name="qteCommandee" value={formData.qteCommandee} onChange={handleChange} step="0.001" className={`w-full p-2 border rounded ${validationErrors.qteCommandee ? 'border-red-500' : 'border-gray-300'}`}/>
            {validationErrors.qteCommandee && <p className="text-red-500 text-xs mt-1">{validationErrors.qteCommandee}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantité restante</label>
            <input type="number" name="qteRestante" value={formData.qteRestante} onChange={handleChange} step="0.001" className="w-full p-2 border border-gray-300 rounded"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Prix unitaire (€)</label>
            <input type="number" name="prixUnitaire" value={formData.prixUnitaire} onChange={handleChange} step="0.01" className={`w-full p-2 border rounded ${validationErrors.prixUnitaire ? 'border-red-500' : 'border-gray-300'}`}/>
            {validationErrors.prixUnitaire && <p className="text-red-500 text-xs mt-1">{validationErrors.prixUnitaire}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Prix total (€)</label>
            <input type="number" name="prixTotal" value={formData.prixTotal} readOnly className="w-full p-2 border border-gray-300 rounded bg-gray-50"/>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <ActionButton  icon={<FaTimes />}  label="Annuler" color="secondary" onClick={onClose} />
          <ActionButton icon={<FaSave />} label={submitting ? 'Enregistrement...' : 'Enregistrer'}color="primary"onClick={handleSubmit}disabled={submitting}/>
        </div>
      </form>
    </div>
  )
}

export default ProductForm