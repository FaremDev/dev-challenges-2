import { LOAD_IMAGES } from '../actions/images'

export default function files (state = {uploadingState: 'NONE'}, action) {
    switch(action.type) {
        case LOAD_IMAGES:
            return {
                ...state,
                images: action.images
            };
        default:
            return state
    }
}
