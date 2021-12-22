import { PREZENT_ADD, PREZENT_DELETE, PREZENT_EDIT, PREZENTS_UPDATE, PREZENT_COMPLETE } from "../prezents/PrezentActions";

export const prezentReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case PREZENT_ADD:
            return [...state, action.payload];
        case PREZENT_DELETE:
            return [...state.filter(el => el.id != action.payload.id)];
        case PREZENT_EDIT:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case PREZENT_COMPLETE:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case PREZENTS_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}