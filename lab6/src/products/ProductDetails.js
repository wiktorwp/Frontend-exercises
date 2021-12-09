import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }, props) => {

    return (

        <div>
            <h3>Product details</h3>
            <div>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>

            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    product: state.products.find(product => product.id == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ProductDetails));