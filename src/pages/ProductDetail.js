import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { add } from '../store/cartSlice'
import {toast} from 'react-toastify'

const ProductDetail = () => {
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)
    
    useEffect(() => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProductDetails(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
                setError(err.message)
            })
    }, [])

    const addToCart = (product) => {
        if(cartItems.length > 0) {
            cartItems.map((item) => {
                if(item.id === product.id) {
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
        <div className='container'>
            <h2 className='text-center mt-3 text-primary'>Product Details</h2><hr />
            
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={productDetails.image} alt={productDetails.title} width="250px" />
                </div>
                <div className="col-md-8 product-details">
                    <p><strong>Product:</strong> {productDetails.title}</p>    
                    <p style={{ textTransform: "capitalize" }}><strong>Category:</strong> {productDetails.category}</p>
                    <p className='mt-3'><strong>Description:</strong> {productDetails.description}</p>

                    <h3 className='text-warning'>Price: ${productDetails.price}</h3>
                    <hr />
                    
                    <div className="btns d-flex gap-2 mt-3">
                        <Link to='/' className='btn btn-secondary'>Back</Link>
                        <button className="btn btn-success" onClick={() => addToCart(productDetails)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail