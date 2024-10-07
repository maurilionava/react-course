import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import Search from './components/Search'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <BrowserRouter>
       <NavBar />
        <SearchForm />
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/products/:id" element={<Product />}/>
          <Route  path="/company" element={<Navigate to="/about" />}/>
          <Route  path="/search" element={<Search />}/>
          <Route  path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
