import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
    <div className='container'>
        <h1 className='text-center text-primary my-3'>Welcome to Redux Ekart Store</h1>
        <hr />

        <Product />
    </div>
    </>
  )
}

export default Home