import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { loadImages } from './store/actions';
import App from './App';
import { getImagesFromFirebase } from './utils/_api';

store.dispatch(loadImages());
getImagesFromFirebase();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
