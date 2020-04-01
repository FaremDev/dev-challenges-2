import { actionLoadImages } from './images'

export function loadImages(filter) {
    return (dispatch) => {
        // Load images, with a filter if it is set
        let images = '';

        dispatch(actionLoadImages(images));
    }
}

