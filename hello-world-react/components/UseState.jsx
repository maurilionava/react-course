import {useState} from 'react'

const UseState = () => {
    let value01 = 0
    const [value02, setValue02] = useState(0)

  return (
    <>
        <h2>{value01}</h2>
        <button onClick={() => { value01 = 1 }}>Change Default Value</button>
        
        <h2>{value02}</h2>
        <button onClick={() => { setValue02(1)}}>Change UseState Value</button>
    </>    
  )
}

export default UseState