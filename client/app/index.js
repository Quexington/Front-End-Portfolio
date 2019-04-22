import '../public/styles/styles.scss';
//**Import all of the necessary react libraries**
//For identifying React components
import React from 'react';
//For rendering react components to the DOM
import { render } from 'react-dom';

//**Import all of the necessary Redux libraries**
//For getting state data to throughout the application
import {Provider} from 'react-redux';
//For creating the store object that redux uses and applying below middleware to it
import {createStore, applyMiddleware} from 'redux';
//Middleware that allows actions to be functions that take dispatch
import thunk from 'redux-thunk';
//Middleware for data received from asychronous requests to the server to be easily passed to redux
import promise from 'redux-promise';
//Middleware that creates a logger that logs important redux information like emitted actions, etc.
import {createLogger} from 'redux-logger';

//**Gets the application state**
import allReducers from './reducers';

//**Imported componenets**
import Layout from './Layout/container.js';

//**Creating the Redux store with the application state and applying the above middleware
const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

/*Rendering the layout component to a div in the DOM and giving it access to the application state
as defined by the combined reducer and component containers*/
render((
  <Provider store={store}>
    <Layout/>
  </Provider>
), document.getElementById('app'));
