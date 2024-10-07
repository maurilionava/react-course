import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?" + searchParams
console.log(url)
    const {data: items, loading, error} = useFetch(url)
console.log(items)
  return (
    <>
        <h1>Products List</h1>
        
        {error && <p>{error}</p>}
        <ul>
            {items && items.map((product) => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>R$ {product.price}</p>
                    <Link to={`products/${product.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Search