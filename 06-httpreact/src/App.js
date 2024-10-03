import './App.css';
import {useState} from 'react'

import {useFetch} from './hooks/useFetch'

const url = 'http://localhost:3000/productsasd'

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const {data : items, httpConfig, loading, error} = useFetch(url)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
    httpConfig(product, 'POST')

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Products List</h1>
     
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>
      )}
      
      <div className="div-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            Price:
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          
          {loading && (<input type="submit" value="Wait" disabled />)}
          {!loading && (<input type="submit" value="Submit" />)}
        </form>
      </div>
    </div>
  );
}

export default App;
