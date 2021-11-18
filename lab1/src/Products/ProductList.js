import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
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


const deleteProduct = async (element) => {
        const response = axios.delete(`https://fakestoreapi.com/products/${element.id}`);
        console.log(response)
        setProducts(products.filter(product => product.id !== element.id));
}

        return (
        
          <div className="List">
            <div className="Products">
            {products.map(element=>
            <div key={element.id}>ID:{element.id}<button onClick={()=>(deleteProduct(element))}>Delete</button><Link to={`/products/${element.id}/details`}>Product Details</Link> <div>Nazwa: {element.title}</div> Cena: {element.price} Kategoria: {element.category}</div>)}
            </div>
          </div>
        );
      }


export default ProductList;

