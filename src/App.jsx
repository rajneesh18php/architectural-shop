import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import CompanyProfile from './Pages/CompanyProfile'
import CustomerSatisfaction from './Pages/CustomerSatisfaction'
import Contect from './Pages/Contect'
import Product from './Pages/Product'
import Gallery from './Pages/Gallery'
import Services from './Pages/Servies'
import Steel from './products/Steel'
import Furniture from './products/Furniture'
import Steeless from './products/Steeless'
import Railing from './products/Railing'
import Balcony from './products/Balcony'
import Fabrication from './products/Fabrication'
import Carts from './products/Carts'
import Checkout from './products/Checkout'
const App = () => {
  return (
    <>
     <Router>
    
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/company-profile' element={<CompanyProfile/>}/>
        <Route path='/customer-satisfaction' element={<CustomerSatisfaction/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/gallery/:category' element={<Gallery/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/steel' element={<Steel/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/steeless' element={<Steeless/>}/>
        <Route path='/realing' element={<Railing/>}/>
        <Route path='/balcony' element={<Balcony/>}/>
        <Route path='/fabrication' element={<Fabrication/>}/>
        <Route path='/carts' element={<Carts/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
          
      </Routes>
     </Router>
    </>
  )
}

export default App
