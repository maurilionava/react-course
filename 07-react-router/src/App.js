import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import NavBar from './components/NavBar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
