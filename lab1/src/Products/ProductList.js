import React, {useState, useEffect} from 'react'
// eslint-disable-next-line
import ProductForm from './ProductForm';
import ProductCreate from './ProductCreate';
// eslint-disable-next-line
import { Formik, Field, Form, ErrorMessage} from "formik";
const axios = require('axios')


function ProductList() {
        const [products, setProducts] = useState([]);

        // eslint-disable-next-line
useEffect(async ()=>{
        await axios.get("https://fakestoreapi.com/products")
        .then(function (response) {
                setProducts(response.data);
        })
},[])

const createProduct = async (newProduct, {resetForm}) => {
        resetForm({})
        const response = await axios.post("https://fakestoreapi.com/products", newProduct);
        console.log(response);
        setProducts([...products, response.data]);
    }

const deleteProduct = async (element) => {
        const response = axios.delete(`https://fakestoreapi.com/products/${element.id}`);
        console.log(response)
        setProducts(products.filter(product => product.id !== element.id));
}

        return (
        
          <div className="List">
                  <ProductCreate onSubmit={createProduct}/>
            <div className="Products">
            {products.map(element=>
            <div key={element.id}>ID:{element.id}<button onClick={()=>(deleteProduct(element))}>Delete</button> <div>Nazwa: {element.title}</div> Cena: {element.price} Kategoria: {element.category}</div>)}
            </div>
          </div>
        );
      }


export default ProductList;

