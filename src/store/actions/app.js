export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';

export function actionSetModalOpen(isModalOpen) {
  console.log(isModalOpen);
  return {
    type: SET_MODAL_OPEN,
    isModalOpen,
  };
}
