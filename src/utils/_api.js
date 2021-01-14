/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-const */
import axios from 'axios';

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
