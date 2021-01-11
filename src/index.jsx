import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import store from './store';
import { compose, createStore } from 'redux';
import reducer from './store/reducers';
import middleware from './store/middleware';
import { loadImages } from './store/actions';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  middleware,
));

store.dispatch(loadImages());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
