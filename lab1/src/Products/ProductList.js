import React, {useState, useEffect} from 'react'
import ProductForm from './ProductForm';
import ProductCreate from './ProductCreate';
const axios = require('axios')


function ProductList() {
        const [products, setProducts] = useState([]);

useEffect(async ()=>{
        await axios.get("https://fakestoreapi.com/products")
        .then(function (response) {
                setProducts(response.data);
        })
},[])

const createProduct = async (newProduct) => {
        const response = await axios.post("https://fakestoreapi.com/products", newProduct);
        console.log(response);
        setProducts([...products, response.data]);
    }

//const createProduct = async (newProduct) => {
//        const response = await axios.post("https://fakestoreapi.com/products", newProduct);
//        console.log(response);
//        setUsersList([...usersList, response.data]);
//    }

useEffect(()=>{
        products.forEach(element => {
                console.log(element)
        });
})
        return (
        
          <div className="List">
                  <ProductCreate onSubmit={createProduct}/>
            <div className="Products">
            {products.map(element=>
            <div>ID:{element.id} <div>Nazwa: {element.title}</div> Cena: {element.price} Kategoria: {element.category}</div>)}
            </div>
          </div>
        );
      }


export default ProductList;

