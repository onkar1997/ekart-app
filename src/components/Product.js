import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import { STATUSES } from '../store/productSlice'
import { fetchProducts } from '../store/productSlice'

const Product = () => {

  const [error, setError] = useState("")

  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product)
  const cartItems = useSelector((state) => state.cart) 

  useEffect(() => {
    dispatch(fetchProducts('https://fakestoreapi.com/products'))
  }, [])

  const addToCart = (product) => {
    if(cartItems.length > 0) {
        cartItems.map((item) => {
            if(item.id == product.id) {
                toast.error('Product already added to cart')
            }
            else {
                dispatch(add(product))
                toast.success('Product added to cart')
            }
        })
    } else {
        dispatch(add(product))
        toast.success('Product added to cart')
    }
  }

  if(status === STATUSES.LOADING) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    )
  }

  if(status === STATUSES.ERROR) {
    return (
      <div className="alert alert-danger" role="alert">
        ERROR: {error}
      </div>
    )
  }
  
  return (
    <>
      <div className="product-wrapper mb-4">
      {products && products.map((product) => (
        <div key={product.id} className="card" style={{ width: "15rem" }} > 
          <Link className='text-center' to={`product/${product.id}`}>
            <img src={product.image} className="card-img-top p-2" alt={product.title} />
          </Link>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h5 className="card-text my-3">Price: ${product.price}</h5>
              <button className="btn btn-success btn-block" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Product