import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

const Product = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart)

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.message)
        setError(err.message)
        setLoading(false)
      })
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

  if(loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
    )
  }

  if(error) {
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