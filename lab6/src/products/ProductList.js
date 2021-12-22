import { connect } from "react-redux";
import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductForm from './ProductForm'
import { addProductAction, deleteProductAction, updateProductsAction } from "../actions/ProductActions";
import { productDownloadedChangeAction } from "../actions/DownloadedActions";
const _ = require('lodash')
const ProductList = ({ products, addProductAction, updateProductsAction, deleteProductAction, downloaded, productDownloadedChangeAction }, props) => {


    useEffect(() => {
        if (!downloaded[0]) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => (json.map(result => { addProductAction(result) })))
            productDownloadedChangeAction()
        }
    }, [downloaded])

    function refreshData() {
        if (products.length == 0) {
            return <button onClick={() => { productDownloadedChangeAction() }}>Odśwież dane</button>
        }
    }

    function alphabetSort() {
        updateProductsAction(_.sortBy(products, ['title', 'price']))
    }
    function priceSort() {
        updateProductsAction(_.sortBy(products, ['price', 'price']))
    }


    function categoryFilter(cat) {
        updateProductsAction(_.filter(products, { 'category': cat }))
    }

    return (
        <div>
            <h3>Products list</h3>
            <ProductForm />
            <div className="Sorting">
                Sortuj:
                <button onClick={() => { alphabetSort() }}>Alfabetycznie</button>
                <button onClick={() => { priceSort() }}>Cena rosnąco</button>
            </div>
            <div className="Filtering">
                <Formik
                    initialValues={{
                        category: '',
                    }}
                    onSubmit={(values) => categoryFilter(values.category)}>
                    <Form>
                        Kategoria
                        <Field name="category" /><br />
                        <button type="submit">
                            Zatwierdz
                        </button>
                    </Form>
                </Formik>
            </div>
            {refreshData()}
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        <button onClick={() => deleteProductAction(product)}>Usuń</button>
                    </div>)
            })}

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        downloaded: state.downloaded
    };
}

const mapDispatchToProps = {
    updateProductsAction,
    addProductAction,
    deleteProductAction,
    productDownloadedChangeAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);