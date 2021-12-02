import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { addProductAction } from "../actions/ProductActions";
const ProductList = ({ products, addProductAction } ,props) => {
    
    useEffect(() => {
        console.log("us"+products)
    if (products == ""){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>(json.map(result => {addProductAction(result)})))
    }
        }, [props])
    

    return (
        <div>
            <h3>Products list</h3>
            {products.map(product => {
                return (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.productname}</Link>
                </div>)})}
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
}

const mapDispatchToProps = {
    addProductAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);