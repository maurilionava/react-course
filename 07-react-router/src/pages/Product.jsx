import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

  return (
    <>
        <p>Product ID {id}</p>
        
        {error && <p>Error</p>}
        {loading && <p>Loading. Please wait.</p>}
        {product && 
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        }
    </>
  )
}

export default Product