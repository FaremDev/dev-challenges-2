export const SET_UPLOAD_MODAL_OPEN = 'SET_UPLOAD_MODAL_OPEN';
export const SET_DELETE_MODAL_OPEN = 'SET_DELETE_MODAL_OPEN';
export const GET_IMAGES_URLS = 'SET_DELETE_MODAL_OPEN';

export function actionSetUploadModalOpen(isUploadModalOpen) {
  return {
    type: SET_UPLOAD_MODAL_OPEN,
    isUploadModalOpen,
  };
}

export function actionSetDeleteModalOpen(isDeleteModalOpen) {
  return {
    type: SET_DELETE_MODAL_OPEN,
    isDeleteModalOpen,
  };
}
