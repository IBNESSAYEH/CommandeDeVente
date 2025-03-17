import axios from 'axios'

// creer axios avec default setting
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// service api produits 
const productAPI = {
  getAll: async () => {
    const response = await api.get('/products')
    return response.data
  },
  
  getById: async (id) => {
     const response = await api.get(`/products/${id}`)
    return response.data
  },
  
  create: async (product) => {
    const response = await api.post('/products', product)
    return response.data
  },
  
  update: async (id, product) => {
    const response = await api.put(`/products/${id}`, product)
    return response.data
  },
  
  delete: async (id) => {
    return api.delete(`/products/${id}`)
  }
}

export { productAPI }