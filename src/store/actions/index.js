/* eslint-disable import/prefer-default-export */
import {
  actionSetImages,
  setUploadState,
  addImageToList,
  removeImage,
} from './images';
import { database } from '../../firebase/firebase';
import { deleteImageFromFirebase } from '../../utils/_api';

export function actionLoadImagesFromFirebase() {
  return async (dispatch) => {
    await database.ref('images/').once('value')
      .then((snapshot) => {
        snapshot.val();
        dispatch(actionSetImages(snapshot.val()));
        return snapshot.val();
      }).catch((e) => {
        console.log(e);
      });
  };
}

export function addAnImage(img) {
  return (dispatch) => {
    dispatch(addImageToList(img));
  };
}

export function resetUploadState() {
  return (dispatch) => {
    dispatch(setUploadState('NONE'));
  };
}

export function deleteImage(key) {
  deleteImageFromFirebase(key);
  return (dispatch) => {
    dispatch(removeImage(key));
  };
}
