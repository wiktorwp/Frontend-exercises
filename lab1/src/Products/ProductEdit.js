// eslint-disable-next-line
import React, {useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
// eslint-disable-next-line
const axios = require('axios');


const productSchema = Yup.object().shape({
    title: Yup.string().required('Tytuł jest wymagany'),
    price: Yup.number().required('Cena jest wymagana'),
    category: Yup.string().required('Kategoria jest wymagana'),
})


function ProductEdit({ onSubmit, initialValues }) {


    const [products, setProducts] = useState([]);

    const productid = window.location.pathname.slice(10).slice(0, -5)

    useEffect(async ()=>{
        await axios.get(`https://fakestoreapi.com/products/${productid}`)
        .then(function (response) {
                setProducts(response.data);
        })
    },)

    const createProduct = async (newProduct, {resetForm}) => {
        resetForm({})
        const response = await axios.put("https://fakestoreapi.com/products/"+productid, newProduct);
        console.log(response);
        setProducts([response.data]);
        
    }



    return (
        <div>
        <Formik
            initialValues={initialValues={
                title: products.title,
                price: products.price,
                category: products.category
            }}
            validationSchema={productSchema}
            onSubmit={createProduct}
            enableReinitialize={true}
        >
            <Form>
                <div>Tytuł <Field name="title"></Field></div>
                <ErrorMessage name="title" component="div" />
                <div>Cena <Field name="price" /></div>
                <ErrorMessage name="price" component="div" />
                <div>Kategoria <Field name="category" /></div>
                <ErrorMessage name="category" component="div" />
                <button type="submit">Zatwierdź</button>
            </Form>

        </Formik>
        <div>Name: {products.title}</div>
        <div>Price: {products.price}</div>
        <div>Category: {products.category}</div>
        
        </div>


    );

}

export default ProductEdit;