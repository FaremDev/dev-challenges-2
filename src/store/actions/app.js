export const SET_UPLOAD_MODAL_OPEN = 'SET_UPLOAD_MODAL_OPEN';
export const SET_DELETE_MODAL_OPEN = 'SET_DELETE_MODAL_OPEN';

export function actionSetUploadModalOpen(isUploadModalOpen) {
  console.log(isUploadModalOpen);
  return {
    type: SET_UPLOAD_MODAL_OPEN,
    isUploadModalOpen,
  };
}

export function actionSetDeleteModalOpen(isDeleteModalOpen) {
  console.log(isDeleteModalOpen);
  return {
    type: SET_DELETE_MODAL_OPEN,
    isDeleteModalOpen,
  };
}
