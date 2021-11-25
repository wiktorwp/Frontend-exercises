import { POST_ADD } from "../actions/PostActions";

export const postReducer = (state = [], action) => {
    switch(action.type) {
        case POST_ADD:
            return [...state, action.payload];
        default: 
            return state;
    }
};