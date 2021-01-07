export const LOAD_IMAGES = 'LOAD_IMAGES';

export function actionLoadImages(images) {
  return {
    type: LOAD_IMAGES,
    images,
  };
}
