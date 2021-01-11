import { createStore, compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import reducers from './reducers';
import middleware from './middleware';

const rfConfig = {}; // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
firebase.firestore();

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig optional
  middleware,
)(createStore);

// Create store with reducers and initial state
const initialState = {};
export default createStoreWithFirebase(reducers, initialState);
