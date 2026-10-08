import React from 'react'
import Footer from './Components/Footer'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contect from './Pages/Contect'
import Header from './Components/Header'
import Product from './Pages/Product'
import Gallery from './Pages/Gallery'
import Services from './Pages/Servies'
const App = () => {
  return (
    <>
     <Router>
    
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/services' element={<Services/>}/>
          
      </Routes>
     </Router>
    </>
  )
}

export default App
