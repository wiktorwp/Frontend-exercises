import React, {useState, useEffect} from 'react'
import ProductForm from './ProductForm';
const axios = require('axios')

function ProductCreate() {

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

    return (<div>
        <ProductForm onSubmit={createProduct} initialValues={{ title: '', price: '', category: ''}} />
        <div className="Products">
            {products.map(element=>
            <div key={element.id}>ID:{element.id}<div>Nazwa: {element.title}</div></div>)}
            </div>
        </div>)
}

export default ProductCreate;