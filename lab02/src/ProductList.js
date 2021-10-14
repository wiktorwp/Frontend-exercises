import App from "./App";
import React, {useState, useEffect} from 'react'
const axios = require('axios')


function ProductList() {
        const [products, setProducts] = useState([]);

useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(function (response) {
                setProducts(response.data);
        })
},[])

useEffect(()=>{
        products.forEach(element => {
                console.log(element)
        });
})
        return (
          <div className="List">
            <div className="Products">
            {products.map(element=>
            <div>ID:{element.id} <div>Nazwa: {element.title}</div> Cena: {element.price} Kategoria: {element.category}</div>)}
            </div>
          </div>
        );
      }


export default ProductList;

