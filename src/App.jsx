import React from 'react'
import Footer from './Components/Footer'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path='' element={<Footer/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
