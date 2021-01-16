import { imageRef, database } from '../../firebase/firebase';
import { randomFilename } from '../../utils';

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

// TODO : Integrate callbacks for "completing" and "failed", on top of the one
// for "completed" (loading bar mechanism).
export function actionUploadImage(image, label) {
  const fileName = randomFilename();
  // const DB_URL = 'https://devchallenges2-default-rtdb.europe-west1.firebasedatabase.app/images/';
  const task = imageRef.child(fileName).put(image);

  task.on(
    'state_changed',
    null,
    null,
    async () => {
      task.snapshot.ref.getDownloadURL().then((url) => {
        database.ref(`images/${fileName}`).set({
          url,
          label,
        });
      });
    },
  );
}
