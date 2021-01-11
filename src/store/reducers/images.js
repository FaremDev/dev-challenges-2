import {
  SET_IMAGES,
  SET_UPLOAD_STATE,
  SET_ERROR_FORMAT,
  ADD_IMAGE_TO_LIST,
  ADD_IMAGES_TO_LIST,
  REMOVE_IMAGE_FROM_LIST,
  SET_CURRENT_IMAGE_URL,
} from '../actions/images';

export default function images(state = { uploadingState: 'NONE' }, action) {
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
        images: [action.image].concat(state.images),
      };
    case ADD_IMAGES_TO_LIST:
      return {
        ...state,
        images: state.images.concat([action.images]),
      };
    case REMOVE_IMAGE_FROM_LIST:
      return {
        ...state,
        images: state.images.filter((obj) => obj.url !== action.url),
      };
    case SET_ERROR_FORMAT:
      return {
        ...state,
        isErrorFormat: action.isErrorFormat,
      };
    case SET_CURRENT_IMAGE_URL:
      return {
        ...state,
        currentImageUrl: action.currentImageUrl,
      };
    default:
      return state;
  }
}
