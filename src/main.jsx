import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './routes/Cart'
import ItemListContainer from './routes/ItemListContainer'
import ContactPage from './routes/ContactPage'
import ItemDetailContainer from './routes/ItemDetailContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout'



ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route exact path='/Carrito' element={<Cart />} />
        <Route exact path='/Productos' element={<ItemListContainer />} />
        <Route exact path='/Productos/:categoria' element={<ItemListContainer />} />
        <Route exact path='/Contacto' element={<ContactPage />} />
        <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
);
