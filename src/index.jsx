import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { actionLoadImagesFromFirebase } from './store/actions';
import App from './App';

store.dispatch(actionLoadImagesFromFirebase());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
