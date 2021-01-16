import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import images from './images';
import app from './app';

export default combineReducers({
  images,
  app,
  firebase: firebaseReducer,
});
