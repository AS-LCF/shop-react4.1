
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'


export default function App(){
  const [cartItems,setCartItems]=useState([])

  const addToCart=(product) =>{
    setCartItems(prev=>[...prev, product])
  }

  const remuveFromCart=(id)=>{
    setCartItems(prev=>prev.filter(item => item.id !== id))
  }


  return ( 
    <BrowserRouter>
      <Header/>
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />

          <Route path="/product/:id" element={<ProductDetail 
          addToCart={addToCart} />} />
            
            <Route path="/cart" element={<CartPage cartItems={cartItems}
          removeFromCart={remuveFromCart} />} />
        </Routes> 
      </main>
      <Footer/>
    </BrowserRouter>

  )
}


