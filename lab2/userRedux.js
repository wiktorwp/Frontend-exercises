const Redux = require('redux');

/*

    Users, todos, events
    {
        users: [ { ... }, { ... } ],
        todos: [ { ... }],
        events: [ { ... }]
    }

    pobieramy uzytkowników w UsersList, przechodzimy do UserDetails

    https://....


*/

function userReducer(state = { users: [], todos: [], loading: false }, action) {
    console.log(state);
    switch(action.type) {
        case 'GET_USERS': 
            return { ...state, loading: true};
        case 'GET_USERS_FINISHED': 
            return {...state, loading: false};
        case 'CREATE_USER':
            return { ...state, users: [...state.users, action.payload ]};
        case 'DELETE_USER':
            return { ...state, users: [ ...state.users.filter(el => el.id !== action.payload.id) ]}
        case 'CREATE_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
}

let store = Redux.createStore(userReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'GET_USERS', payload: { id: 0, name: 'Adam' } });

store.dispatch({ type: 'CREATE_USER', payload: { id: 0, name: 'Adam' } });
store.dispatch({ type: 'CREATE_USER', payload: { id: 1, name: 'Grzegorz' } });
store.dispatch({ type: 'DELETE_USER', payload: { id: 1, name: 'Grzegorz' } });
store.dispatch({ type: 'CREATE_TODO', payload: { id: 0, name: 'Zmiana' } });

