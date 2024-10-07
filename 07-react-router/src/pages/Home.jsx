import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

//import Home.css

const Home = () => {
  const url = 'http://localhost:3000/products'

  const {data: items, httpConfig, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Products List</h1>

      {error && <p>{error}</p>}

      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home