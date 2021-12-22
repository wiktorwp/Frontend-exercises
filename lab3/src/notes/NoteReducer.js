import { NOTE_ADD, NOTE_DELETE, NOTE_EDIT, NOTES_UPDATE, NOTE_COMPLETE } from "../notes/NoteActions";

export const noteReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case NOTE_ADD:
            return [...state, action.payload];
        case NOTE_DELETE:
            return [...state.filter(el => el.id != action.payload.id)];
        case NOTE_EDIT:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case NOTE_COMPLETE:
            return [...state.filter(el => el.id != action.payload.id), action.payload];
        case NOTES_UPDATE:
            return [...action.payload];
        default:
            return state;
    }
}