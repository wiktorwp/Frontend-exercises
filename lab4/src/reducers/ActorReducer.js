import { ACTOR_ADD, ACTOR_DELETE, ACTOR_EDIT } from "../actions/ActorActions";

export const actorReducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case ACTOR_ADD: 
            return [...state, action.payload];
        case ACTOR_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;
        case ACTOR_EDIT:
            return [...state.filter(el => el.id !== action.payload.id), action.payload];
    }
}

// ADD_TODO
// REMOVE_TODO
// TODO_ADD