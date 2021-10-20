import ProductForm from "./ProductForm";

function ProductCreate({onSubmit}) {
    return (<ProductForm onSubmit={onSubmit} initialValues={{ title: '', price: '', category: ''}} />)
}

export default ProductCreate;