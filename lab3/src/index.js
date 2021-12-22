import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { userReducer } from './reducers/UserReducer';
import { productReducer } from './reducers/ProductReducer'
import { downloadedReducer } from './reducers/DownloadedReducer'
import { todoReducer } from './todos/TodoReducer'
import { noteReducer } from './notes/NoteReducer'
import logger from './middlewares/Logger';

let store = createStore(
  combineReducers(
    {
      notes: noteReducer,
      todos: todoReducer,
      downloaded: downloadedReducer,
      users: userReducer,
      products: productReducer
    }
  ), applyMiddleware(logger));

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
