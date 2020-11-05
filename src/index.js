import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import teamReducer from './reducers/teamReducer'

//set up store


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(teamReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render( 
<Provider store = {store}>
    <App />
</Provider>, 
document.getElementById('root'));

