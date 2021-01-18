/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  actionSetImages,
  setUploadState,
  addImageToList,
  actionRemoveImage,
} from './images';
import { deleteImageFromFirebase } from '../../utils/_api';
// import { getImages } from '../../utils/_api';

export function loadImages() {
  return async (dispatch) => {
    // TODO: Load images, with a filter if it is set
    const page = `https://picsum.photos/v2/list?page=${Math.floor(Math.random() * (33 - 1) + 1)}`;

    axios.get(page)
      // eslint-disable-next-line max-len
      .then((response) => {
        const imagesArray = [];
        // eslint-disable-next-line max-len
        response.data.forEach((image) => imagesArray.push({ url: image.download_url, label: image.author }));
        // eslint-disable-next-line max-len
        dispatch(actionSetImages(imagesArray));
      })
      .catch((e) => {
        console.log('Erreur requête');
        console.log(e);
        dispatch(actionSetImages([]));
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

export function actionDeleteImage(url) {
  deleteImageFromFirebase(url);
  return (dispatch) => {
    dispatch(actionRemoveImage(url));
  };
}

/* export function actionChangeModalDeleteState(modalState, currentImageUrl = '') {
  return (dispatch) => {
    dispatch(actionSetCurrentImageUrl(currentImageUrl));
    if (currentImageUrl !== '') {
      dispatch(actionRemoveImage(currentImageUrl));
    }
    dispatch(actionSetDeleteModalOpen(modalState));
  };
} */
