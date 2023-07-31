import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyCart from './pages/MyCart'
import ProductDetail from './components/ProductDetail'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App