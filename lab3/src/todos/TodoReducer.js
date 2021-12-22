import { TODO_ADD, TODO_DELETE, TODO_EDIT, TODOS_UPDATE, TODO_COMPLETE } from "../todos/TodoActions";

export const todoReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case TODO_ADD:
            return [...state, action.payload];
        case TODO_DELETE:
            return [...state.filter(el => el.id != action.payload.id)];
        case TODO_EDIT:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case TODO_COMPLETE:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case TODOS_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}