import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchProducts } from '../store/productSlice'
import { useDispatch } from 'react-redux'

const Category = () => {
    const [category, setCategory] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                // console.log(res.data)
                setCategory(res.data)
            })
    }, [])

    const handleClick = (cate) => {
        if(cate === "all") {
            dispatch(fetchProducts(`https://fakestoreapi.com/products`))
        }
        else {
            dispatch(fetchProducts(`https://fakestoreapi.com/products/category/${cate}`))
        }
    }

    return (
       
        <div className="categ-tabs">
            <p id='category'>Category: </p>
            <p onClick={() => handleClick("all")}>ALL</p>
            {category.map((cate, index) => 
                <p key={index}  onClick={() => handleClick(cate)}>{cate}</p>
            )}
        </div>
       
    )
}

export default Category