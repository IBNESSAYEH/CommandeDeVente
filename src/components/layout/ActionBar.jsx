import { useState } from 'react'
import ActionButton from '../buttons/ActionButton'
import ProductForm from '../forms/ProductForm'
import { FaEdit, FaPlus, FaCopy, FaTrashAlt } from 'react-icons/fa'
import { useProducts } from '../../context/ProductContext'

const ActionBar = () => {
  const { products, deleteProduct, error } = useProducts()
  const [showForm, setShowForm] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)

  // methode executer lors du clique sur buttoncreer pour aficher modal
  const handleCreate = () => {
    setCurrentProduct(null)
    setShowForm(true)
  }

  // modifier produit prend tjrs le premier produit
  const handleEdit = () => {
    if (products.length > 0) {
      setCurrentProduct(products[0]) 
      setShowForm(true)
    } else {
      alert('Aucun produit à modifier')
    }
  }

  // dupliquer le premier produit
  const handleDuplicate = () => {
    if (products.length > 0) {
      const productCopy = {...products[0]}
       delete productCopy.id
      productCopy.produit = `Copie de ${productCopy.produit}`
      
      setCurrentProduct(productCopy)
       setShowForm(true)
    } else {
      alert('Aucun produit à dupliquer')
    }
  }

  // suprimer le premier produit
  const handleDelete = async () => {
    if (products.length > 0) {
      if (window.confirm('Etes-vous sûr de vouloir supprimer ce produit ?')) {
        try {
          await deleteProduct(products[0].id)
          alert('Produit supprimé avec succès')
        } catch (err) {
          alert(error || `erreur lors de la suppression du produit ${err}`)
        }
      }
    } else {
      alert('Aucun produit à supprimer')
    }
  }

  // fermer le modal
  const closeForm = () => {
    setShowForm(false)
    setCurrentProduct(null)
  }

  return (
    <>
      <div className="p-2 bg-gray-100 mt-3">
        <div className="flex space-x-2">
          <ActionButton icon={<FaEdit />} label="Modifier" onClick={handleEdit} />
           <ActionButton icon={<FaPlus />} label="Créer" onClick={handleCreate} />
          <ActionButton icon={<FaCopy />} label="Dupliquer" onClick={handleDuplicate} />
          <ActionButton icon={<FaTrashAlt />} label="Supprimer" onClick={handleDelete} />
        </div>
      </div>
      
      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-full max-w-2xl">
            <ProductForm product={currentProduct} onClose={closeForm} />
          </div>
        </div>
      )}
    </>
  )
}

export default ActionBar