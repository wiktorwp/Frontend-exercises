import { USER_ADD, USER_DELETE, USER_EDIT } from "../actions/UserActions";

export const userReducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case USER_ADD: 
            return [...state, action.payload];
        case USER_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;
        case USER_EDIT:
            return [...state.filter(el => el.id !== action.payload.id), action.payload];
    }
}