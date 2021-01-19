import _ from 'lodash';
import {
  SET_IMAGES,
  SET_UPLOAD_STATE,
  SET_ERROR_FORMAT,
  ADD_IMAGE_TO_LIST,
  REMOVE_IMAGE_FROM_LIST,
  SET_CURRENT_IMAGE_KEY,
} from '../actions/images';

export default function images(state = { uploadingState: 'NONE', images: {} }, action) {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.images,
      };
    case SET_UPLOAD_STATE:
      return {
        ...state,
        uploadingState: action.uploadingState,
      };
    case ADD_IMAGE_TO_LIST:
      return {
        ...state,
        images: {
          [action.image.key]: {
            label: action.image.label,
            url: action.image.url,
            creation_date: action.image.creation_date,
            key: action.image.key,
          },
          ...state.images,
        },
      };
    case REMOVE_IMAGE_FROM_LIST:
      // eslint-disable-next-line no-case-declarations
      const newStateImages = _.omit(state.images, action.key);
      return {
        ...state,
        images: newStateImages,
      };
    case SET_ERROR_FORMAT:
      return {
        ...state,
        isErrorFormat: action.isErrorFormat,
      };
    case SET_CURRENT_IMAGE_KEY:
      return {
        ...state,
        currentImageKey: action.currentImageKey,
      };
    default:
      return state;
  }
}
