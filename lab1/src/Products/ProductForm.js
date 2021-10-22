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


function ProductForm({ onSubmit, initialValues }) {



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={onSubmit}
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


    );

}

export default ProductForm;