import TableHeader from './TableHeader'
import TableCell from './TableCell'
import { useProducts } from '../../context/ProductContext'

const DataTable = () => {
  const { products, loading, error } = useProducts()
  
  // les columns du table
  const headers = [
    { id: 'id', label: 'ID', align: 'left' },
    { id: 'produit', label: 'Produit', align: 'left' },
    { id: 'unite', label: 'Unité', align: 'left' },
    { id: 'qteCommandee', label: 'Qté commandée', align: 'right' },
    { id: 'qteRestante', label: 'Qté restante', align: 'right' },
    { id: 'prixUnitaire', label: 'Prix unitaire', align: 'right' },
    { id: 'prixTotal', label: 'Prix total', align: 'right' }
  ]

  
  if (loading) return <div className="p-4 text-center">Chargement des produits...</div>
   if (error) return <div className="p-4 text-center text-red-500">{error}</div>
  
  // currency des numeros
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(value)
  }
  
  // 3 digit apres vergule
  const formatNumber = (value) => {
    return new Intl.NumberFormat('fr-FR', { 
      minimumFractionDigits: 3 
    }).format(value)
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse border-gray-300">
        <thead>
          <tr>
            {headers.map(header => (
              <TableHeader  key={header.id}  align={header.align}>
                {header.label}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id} className="even:bg-gray-50 hover:bg-gray-100">
                <TableCell align="left"> {product.id}</TableCell>
                 <TableCell align="left">{product.produit}</TableCell>
                <TableCell align="left">{product.unite} </TableCell>
                
                <TableCell align="right">{formatNumber(product.qteCommandee)}</TableCell>
                <TableCell align="right"> {formatNumber(product.qteRestante)}</TableCell>
                 <TableCell align="right">{formatCurrency(product.prixUnitaire)}</TableCell>
                <TableCell align="right">{formatCurrency(product.prixTotal)}</TableCell>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="p-4 text-center">
                Aucun produit trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable