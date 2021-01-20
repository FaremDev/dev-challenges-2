/* eslint-disable import/prefer-default-export */
import { v4 as uuidv4 } from 'uuid';

export function randomFilename() {
  return uuidv4();
}

export function filterObject(obj, property, val) {
  if (obj !== undefined && property !== undefined && val !== undefined) {
    // eslint-disable-next-line max-len
    // console.log(Object.fromEntries(Object.entries(obj).filter((el) => el[property].includes(val))));
    // console.log(Object.fromEntries(Object.entries(obj).map((el) => console.log(el))));
    return Object.fromEntries(Object.entries(obj).filter((el) => el[1][property].includes(val)));
  }

  return obj;
}
