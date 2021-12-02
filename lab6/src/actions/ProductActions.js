export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const PRODUCT_EDIT = 'PRODUCT_EDIT';

export const addProductAction = (payload) => ({
    type: PRODUCT_ADD,
    payload
});

export const deleteProductAction = (payload) => ({
    type: PRODUCT_DELETE,
    payload
})

export const editProductAction = (payload) => ({
    type: PRODUCT_EDIT,
    payload
})