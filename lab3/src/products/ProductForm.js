import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { addProductAction } from "../actions/ProductActions";
import { connect } from 'react-redux';
import {v4 as uuidv4 } from 'uuid';
import { withRouter } from "react-router";

const ProductForm = ({history, addProductAction},props) => {
    useEffect(() => {
        console.log(props.products);
    }, [props])

    const handleSubmit = (values) => {
        addProductAction(values);
        history.push(`/products`);
    }

    return (
        <div>
            <h3>Product</h3>
            <Formik
                initialValues={{
                    id: uuidv4(),
                    title: '',
                    category: '',
                    description: '',
                    price: ''
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}>
                    <Form>
                        Product Title
                        <Field name="title" /><br/>
                        Product Category
                        <Field name="category" /><br/>
                        Product Description
                        <Field name="description" /><br/>
                        Product Price
                        <Field name="price" /><br/>
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = {
    addProductAction
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductForm));