export const SET_IMAGES = 'SET_IMAGES';
export const SET_UPLOAD_STATE = 'SET_UPLOAD_STATE';
export const ADD_IMAGE_TO_LIST = 'ADD_IMAGE_TO_LIST';
export const ADD_IMAGES_TO_LIST = 'ADD_IMAGES_TO_LIST';
export const SET_ERROR_FORMAT = 'SET_ERROR_FORMAT';
export const REMOVE_IMAGE_FROM_LIST = 'REMOVE_IMAGE_FROM_LIST';
export const SET_CURRENT_IMAGE_URL = 'SET_CURRENT_IMAGE_URL';

export function actionLoadImages(images) {
  return {
    type: SET_IMAGES,
    images,
  };
}

export function setUploadState(uploadingState) {
  return {
    type: SET_UPLOAD_STATE,
    uploadingState,
  };
}

export function addImageToList(image) {
  return {
    type: ADD_IMAGE_TO_LIST,
    image,
  };
}

export function addImagesToList(image) {
  return {
    type: ADD_IMAGES_TO_LIST,
    image,
  };
}

export function setErrorFormat(isErrorFormat) {
  return {
    type: SET_ERROR_FORMAT,
    isErrorFormat,
  };
}

export function actionRemoveImage(url) {
  return {
    type: REMOVE_IMAGE_FROM_LIST,
    url,
  };
}

export function actionSetCurrentImageUrl(currentImageUrl) {
  return {
    type: SET_CURRENT_IMAGE_URL,
    currentImageUrl,
  };
}
