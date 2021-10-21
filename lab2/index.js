const Redux = require('redux');

// Reducer compositions, delegate

const todo = (state, action) => {
  // State refers to individual TODO
  switch (action.type) {
    case 'ADD_TODO':
            console.log(action.type)
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        console.log(action.type)
      if (state.id === action.id) {
        console.log(action.id + "dziala")
        return {
          ...state,
          completed: !state.completed
        }
      }
      return state;
    default:
      return state;
      //case 'SHOW_TODOS':
      //        return state.id
  }
}

function createStore(rootReducer) {
        let state = {
            value: 0
        };
        let callbacks = [];
    
        const getState = () => state;
    
        const dispatch = (action) => {
            state = rootReducer(state, action);
            callbacks && callbacks.forEach(callback => callback());
        }
    
        const subscribe = (callback) => {
            callbacks.push(callback);
        }
    
        // dispatch({});
        return { getState, dispatch, subscribe };
    }


const todos = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
        case 'SHOW_TODOS':
              return state.map(t => todo(t, action));
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const rootReducer = Redux.combineReducers({todos, visibilityFilter})

let store = createStore(todo);




const action2 = {
    type: 'ADD_TODO',
    id: 2,
    text: "buy milk"
}

const action3 = {
        type: 'ADD_TODO',
        id: 3,
        text: "buy bread"
    }
    

const actionWithParam = {
    type: 'ADD_TODO',
    id: 1,
    text: "go out"
}

const actionShow = {
        type: 'SHOW_TODOS'
}

const actionToggle1 = { 
        type: 'TOGGLE_TODO',
        id: 2
     };

 store.subscribe(() => console.log(store.getState()));

 store.dispatch(actionWithParam);
 store.dispatch(action2);
 store.dispatch(action3);

 store.dispatch(actionShow)


 store.dispatch(actionToggle1);


//export default rootReducer;

