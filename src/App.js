import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import MyCart from './pages/MyCart'
import ProductDetail from './pages/ProductDetail'
import Category from './components/Category'
import './App.css'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/my-cart' element={<MyCart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/products/categories' element={<Category />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App