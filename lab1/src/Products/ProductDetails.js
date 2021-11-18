import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
const axios = require('axios')


function ProductDetails() {

    const productid = window.location.pathname.slice(10).slice(0, -8)

    const [products, setProducts] = useState([]);



    useEffect(async ()=>{
        await axios.get(`https://fakestoreapi.com/products/${productid}`)
        .then(function (response) {
                setProducts(response.data);
        })
    },[])

    return (
        <div>
        <div>Id: {products.id}</div>
        <div>Name: {products.title}</div>
        <div>Category: {products.category}</div>
        <div>Description: {products.description}</div>
        <div>Price: {products.price}</div>
        <div>Image url: {products.image}</div>
        <Link to={`/products/${productid}/edit`}>Edit</Link>
        </div>
        
    )
};

export default ProductDetails;