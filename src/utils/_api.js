/* eslint-disable prefer-const */
// const PORTRAIT_IMAGE = 'https://picsum.photos/400/600';
// const LANDSCAPE_IMAGE = 'https://picsum.photos/400/300';

/**
 * Mock API images loading
 */

export function getImage() {
  // const rdm = Math.floor(Math.random() * (3 - 1) + 1);
  const height = Math.floor(Math.random() * (1000 - 200) + 200);
  const width = Math.floor(Math.random() * (1000 - 200) + 200);

  const url = `https://picsum.photos/${width}/${height}`;
  return {
    label: 'working image',
    url,
  };
}

// eslint-disable-next-line import/prefer-default-export
export function getImages() {
  const nbImages = Math.floor(Math.random() * 30) + 10;
  let imagesArray = [];

  for (let i = 0; i < nbImages; i += 1) {
    imagesArray.push(getImage());
  }

  return imagesArray;
}
