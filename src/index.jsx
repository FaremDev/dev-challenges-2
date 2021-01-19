import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { loadImagesFromFirebase } from './store/actions';
import App from './App';

store.dispatch(loadImagesFromFirebase());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
