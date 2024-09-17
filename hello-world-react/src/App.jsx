import './App.css'
import Landscape from './assets/imgs/react.svg'
import UseState from '../components/UseState'
import RenderList from '../components/RenderList'
import RenderObjectList from '../components/RenderObjectList'
import PreviousState from '../components/PreviousState'
import Props from '../components/Props'
import ProProps from '../components/ProProps'
import Title from '../components/Title'
import {useState} from 'react'

function App() {
  const [username] = useState("John Doe")
  const [user] = useState({ name: username, age:30})

  return (
    <>
      {/* imagem da pasta ./public/images */}
      <img src="/images/vite.svg" alt="Paisagem"></img>
      
      {/* imagem da pasta ./assets/imgs */}
      <img src={Landscape} alt="Paisagem"></img>

      {/* <UseState /> */}
      {/* <RenderList /> */}
      {/* <RenderObjectList /> */}
      {/* <PreviousState /> */}
      {/* <Props name={username} /> */}
      <ProProps name={user.name} age={user.age} />
      <Title />

      <h2 style={username === 'John Doe' ? {backgroundColor: "pink"} : {backgroundColor: "brown"}}>CSS contidional inline</h2>
    </>
  )
}

export default App
