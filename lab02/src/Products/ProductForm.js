import React, {useState, useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
const axios = require('axios');


function ProductForm({ onSubmit, initialValues }) {



    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize={true}
        >
            <Form>
                <Field name="title"></Field>
                <Field name="price" />
                <Field name="category" />
                <button type="submit">Zatwierdź</button>
            </Form>

        </Formik>


    );

}

export default ProductForm;