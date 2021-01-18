/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-const */
import axios from 'axios';
import { imageRef, database } from '../firebase/firebase';
import store from '../store';
import { randomFilename } from './index';
import { addImageToList } from '../store/actions/images';

// const PORTRAIT_IMAGE = 'https://picsum.photos/400/600';
// const LANDSCAPE_IMAGE = 'https://picsum.photos/400/300';
const IMAGES_LIST = 'https://picsum.photos/v2/list?page=';

/**
 * Mock API images loading
 */

export function getImage() {
  const height = Math.floor(Math.random() * (1000 - 200) + 200);
  const width = Math.floor(Math.random() * (1000 - 200) + 200);

  const url = `https://picsum.photos/${width}/${height}`;
  return {
    label: 'working image',
    url,
  };
}

// eslint-disable-next-line import/prefer-default-export
/* export function getImages() {
  const nbImages = Math.floor(Math.random() * 30) + 10;
  let imagesArray = [];

  for (let i = 0; i < nbImages; i += 1) {
    imagesArray.push(getImage());
  }

  return imagesArray;
} */

export const getImages = async () => {
  const page = IMAGES_LIST + Math.floor(Math.random() * (33 - 1) + 1);
  let imagesArray = [];

  const response = await axios.get(page);

  return response.data.forEach((image) => imagesArray.push({ url: image.download_url, label: image.author }));
};

// TODO : Integrate callbacks for "completing" and "failed", on top of the one
// for "completed" (loading bar mechanism).
export function uploadImage(image, label) {
  const fileName = randomFilename();
  // const DB_URL = 'https://devchallenges2-default-rtdb.europe-west1.firebasedatabase.app/images/';
  const task = imageRef.child(fileName).put(image);

  task.on(
    'state_changed',
    null,
    null,
    async () => {
      task.snapshot.ref.getDownloadURL().then((url) => {
        const img = { url, label };
        database.ref(`images/${fileName}`).set(img);
        store.dispatch(addImageToList(img));
      });
    },
  );
}

export function getImagesFromFirebase() {
  console.log(database.ref('images/'));
}

export function deleteImageFromFirebase(url) {
  const startPos = url.search('images%2F') + 9;
  const endPos = url.search('\\?alt=media') !== -1 ? url.search('\\?alt=media') : url.length - 1;
  const objectName = url.substring(startPos, endPos);
  const imgToDeleteRef = imageRef.child(objectName);

  imgToDeleteRef.delete()
    .then(() => {
      console.log('Firebase Storage : image deleted');
      // TODO Remove image infos from Firebase Realtime Database
      database.ref(`images/${objectName}`).remove()
        .then(() => {
          console.log('Firebase Realtime Database : image deleted');
        })
        .catch((e) => {
          console.log('Firebase Realtime Database deletion error', e);
        });
    }).catch((e) => {
      console.log('Firebase Storage deletion error', e);
    });

  // TODO : Then, delete image from local store
}
