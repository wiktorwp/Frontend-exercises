function createStore(reducer) {
        let state = {
            value: 0
        };
        let callbacks = [];
    
        const getState = () => state;
    
        const dispatch = (action) => {
            state = reducer(state, action);
            callbacks && callbacks.forEach(callback => callback());
        }
    
        const subscribe = (callback) => {
            callbacks.push(callback);
        }
    
        // dispatch({});
        return { getState, dispatch, subscribe };
    }
    
    const INCREMENT = 'INCREMENT';
    const DECREMENT = 'DECREMENT';
    
    function numberReducer (state, action) {
        switch(action.type) {
            case INCREMENT:
                return { ...state,  value: state.value + 1 };
            case DECREMENT:
                return { ...state, value: state.value - 1};
            default:
                console.log('default')
                return state; 
        }
    }
    
    
    const store = createStore(numberReducer);
    
    // console.log(store.getState());
    
    store.subscribe(() => console.log(store.getState()));
    store.subscribe(() => console.log('123' + store.getState()));
    
    
    store.dispatch({ type: INCREMENT });
    
    store.dispatch({ type: INCREMENT });
    
    // console.log(store.getState());
    