import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PostList from "../posts/PostList";
const ProductDetails = ({product},props) => {

    return (

        <div>
            <h3>Product details</h3>
            <div>
                <div>{product.productname}</div>
                <div>{product.email}</div>
                <div>{product.name.firstname + " " + product.name.lastname}</div>

            </div>
        </div>
    )
};


const mapStateToProps = (state, props) => ({
    product: state.products.find(product => product.id == props.match.params.id)
});

export default withRouter(connect(mapStateToProps, null)(ProductDetails));