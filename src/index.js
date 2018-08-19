import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import  Main  from './Components/Main';
import thunk from 'redux-thunk';
import database from './config';

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><BrowserRouter><Main/></BrowserRouter></Provider>, document.getElementById('root'));

