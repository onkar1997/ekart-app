import React from 'react'
import Product from '../components/Product'
import Category from '../components/Category'

const Home = () => {
  return (
    <>
    <div className='container'>
        <Category />
        <Product />
    </div>
    </>
  )
}

export default Home