import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice'
import {toast} from 'react-toastify'

const MyCart = () => {
  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClick = (productId) => {
    dispatch(remove(productId))
    toast.success('Product removed from cart')
  }


  if(cartProducts.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4 className='text-danger'>Cart is empty !</h4>
      </div>
    )
  }

  return (
    <div className='container mt-3 mb-5'>
      <h2 className='mb-3 text-primary'>My Cart</h2>
      {cartProducts && cartProducts.map((product) => (
        <div key={product.id} className="card p-3 mb-2" style={{ width: "100%" }}>
          <div className="row">
            <div className="col-md-3">
              <img src={product.image} alt={product.title} width="50px" />
            </div>
            <div className="col-md-7">
              <h5>Product: {product.title}</h5>
              <h5>Price: ${product.price}</h5>
              <h5 style={{ textTransform: "capitalize" }}>Category: {product.category}</h5>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" onClick={() => handleClick(product.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyCart