import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

// Update the Firebase config with your project config
const firebaseConfig = {
  apiKey: 'XXXXXX',
  authDomain: 'XXXXXX.firebaseapp.com',
  databaseURL: 'https://XXXXXX.firebasedatabase.app',
  projectId: 'XXXXXX',
  storageBucket: 'XXXXXX.appspot.com',
  messagingSenderId: 'XXXXXX',
  appId: 'XXXXXX:XXXXXX:XXXXXX:XXXXXX',
};

firebase.initializeApp(firebaseConfig);

const fbStorage = firebase.storage();
const storageRef = fbStorage.ref();
const imageRef = storageRef.child('images/');
const database = firebase.database();

export {
  storageRef,
  imageRef,
  database,
  firebase as default,
};
