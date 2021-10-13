import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from './components/Cards'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './redux/reducer'
import { createLogger } from 'redux-logger'
const logger = createLogger({});
const store = createStore(reducer,applyMiddleware(logger))

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
