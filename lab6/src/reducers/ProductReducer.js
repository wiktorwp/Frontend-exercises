import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_EDIT } from "../actions/ProductActions";

export const productReducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case PRODUCT_ADD: 
            return [...state, action.payload];
        case PRODUCT_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;
        case PRODUCT_EDIT:
            return [...state.filter(el => el.id !== action.payload.id), action.payload];
    }
}