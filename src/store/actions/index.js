/* eslint-disable import/prefer-default-export */
import { actionLoadImages } from './images';

export function loadImages() {
  return (dispatch) => {
    // Load images, with a filter if it is set
    const images = '';

    dispatch(actionLoadImages(images));
  };
}
