/* eslint-disable max-len */
import {
  SET_UPLOAD_MODAL_OPEN,
  SET_DELETE_MODAL_OPEN,
  SET_SEARCH_TERM,
} from '../actions/app';

export default function app(state = { isUploadModalOpen: false, isDeleteModalOpen: false }, action) {
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
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
}
