import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Anant from './pages/Anant';
import Torna from './pages/Torna';
import ProductsPage from './pages/Product';
import Kisanpage from './pages/KisanDrone'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Anant' element={<Anant/>}/>
        <Route path='/Torna' element={<Torna/>}/>
        <Route path='/Kisan' element={<Kisanpage/>}/>
        <Route path='/Product' element={<ProductsPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App