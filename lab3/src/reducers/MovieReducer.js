export const movieReducer = (state = [], action) => {
    switch(action.type) {
        case 'MOVIE_ADD':
            return [...state, action.payload];
        case 'MOVIE_ACTOR_ADD':
            return [...state.filter(el => el.id !== action.payload.id), action.payload]
        default: 
            return state;
    }
};