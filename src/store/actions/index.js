/* eslint-disable import/prefer-default-export */
import {
  actionLoadImages,
  setUploadState,
  addImageToList,
} from './images';
import { getImages } from '../../utils/_api';

export function loadImages() {
  return (dispatch) => {
    // TODO: Load images, with a filter if it is set
    dispatch(actionLoadImages(getImages()));
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

/* export function actionChangeModalDeleteState(modalState, currentImageUrl = '') {
  return (dispatch) => {
    dispatch(actionSetCurrentImageUrl(currentImageUrl));
    if (currentImageUrl !== '') {
      dispatch(actionRemoveImage(currentImageUrl));
    }
    dispatch(actionSetDeleteModalOpen(modalState));
  };
} */
