import { createContext, useState, useEffect, useContext } from 'react'
import { productAPI } from '../services/api'

const ProductContext = createContext()
export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // fetch prduit pemdant mount component 
  useEffect(() => {
    fetchProducts()
  }, [])

  // fetch tous produits
  const fetchProducts = async () => {
    setLoading(true)
    setError(null) 
    try {
       const data = await productAPI.getAll()
      setProducts(data)
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur lors du chargement des produits'
       setError(errorMessage)
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  // ajouter produit
  const addProduct = async (product) => {
    setLoading(true)
    setError(null)
    try {
      const newProduct = await productAPI.create(product)
      setProducts([...products, newProduct])
       return newProduct
    } catch (err) {
       const errorMessage = err.response?.data?.message || 'Erreur lors de l\'ajout du produit'
      setError(errorMessage)
        console.error('Error adding product:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // modifier produits
  const updateProduct = async (id, product) => {
    setLoading(true)
    setError(null)
    try {
      const updatedProduct = await productAPI.update(id, product)
       setProducts(products.map(p => p.id === id ? updatedProduct : p))
      return updatedProduct
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur lors de la mise à jour du produit'
       setError(errorMessage)
      console.error('Error updating product:', err)
      throw err
    } finally {
       setLoading(false)
    }
  }

  // supprimer produit
  const deleteProduct = async (id) => {
    setLoading(true)
    setError(null)
    try {
      await productAPI.delete(id)
      setProducts(products.filter(p => p.id !== id))
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Erreur lors de la suppression du produit'
      setError(errorMessage)
      console.error('Error deleting product:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return (
    <ProductContext.Provider value={{
      products,
      loading,
       error,
      fetchProducts,
       addProduct,
      updateProduct,
       deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext