import { SET_UPLOAD_MODAL_OPEN, SET_DELETE_MODAL_OPEN } from '../actions/app';

export default function app(state = { }, action) {
  switch (action.type) {
    case SET_UPLOAD_MODAL_OPEN:
      return {
        ...state,
        isUploadModalOpen: action.isUploadModalOpen,
      };
    case SET_DELETE_MODAL_OPEN:
      return {
        ...state,
        isDeleteModalOpen: action.isDeleteModalOpen,
      };
    default:
      return state;
  }
}
