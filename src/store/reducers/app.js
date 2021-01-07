import { SET_MODAL_OPEN } from '../actions/app';

export default function app(state = { }, action) {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.isModalOpen,
      };
    default:
      return state;
  }
}
