/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-const */
import { imageRef, database } from '../firebase/firebase';
import store from '../store';
import { randomFilename } from './index';
import { addImageToList } from '../store/actions/images';

// TODO : Integrate callbacks for "completing" and "failed", on top of the one
// for "completed" (loading bar mechanism).
export function uploadImage(image, label) {
  const fileName = randomFilename();
  const task = imageRef.child(fileName).put(image);

  task.on(
    'state_changed',
    null,
    null,
    async () => {
      task.snapshot.ref.getDownloadURL().then((url) => {
        const img = {
          url,
          label,
          key: fileName,
          creation_date: new Date().getTime(),
        };
        database.ref(`images/${fileName}`).set(img);
        store.dispatch(addImageToList(img));
      });
    },
  );
}

export function deleteImageFromFirebase(key) {
  // const startPos = url.search('images%2F') + 9;
  // const endPos = url.search('\\?alt=media') !== -1 ? url.search('\\?alt=media') : url.length - 1;
  // const objectName = url.substring(startPos, endPos);
  const imgToDeleteRef = imageRef.child(`${key}`);

  imgToDeleteRef.delete()
    .then(() => {
      console.log('Firebase Storage : image deleted');
      // TODO Remove image infos from Firebase Realtime Database
      database.ref(`images/${key}`).remove()
        .then(() => {
          console.log('Firebase Realtime Database : image deleted');
        })
        .catch((e) => {
          console.log('Firebase Realtime Database deletion error', e);
        });
    }).catch((e) => {
      console.log('Firebase Storage deletion error', e);
    });
}
