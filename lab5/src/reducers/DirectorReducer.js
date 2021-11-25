import { DIRECTOR_ADD, DIRECTOR_DELETE, DIRECTOR_EDIT } from "../actions/DirectorActions";

export const directorReducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case DIRECTOR_ADD: 
            return [...state, action.payload];
        case DIRECTOR_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;
        case DIRECTOR_EDIT:
            return [...state.filter(el => el.id !== action.payload.id), action.payload];
    }
}

// ADD_TODO
// REMOVE_TODO
// TODO_ADD