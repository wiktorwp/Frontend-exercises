import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { incrementReducer } from './reducers/IncrementReducer';
import logger from './middlewares/Logger';

let store = createStore(
  combineReducers(
    { 
      increment: incrementReducer
    }
  ), applyMiddleware(logger));

/*
    User:
      name
      email

    Post:
      content
      user_id

*/

// {
//    users: [
//      { name: 'Kamil', email: 'kamil@example.com' }
//
//    ]
//    posts: [ { content: '', user_id: 'id'} ]
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
