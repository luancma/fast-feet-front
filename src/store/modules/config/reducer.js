import produce from 'immer';
import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const INITIAL_STATE = {
  openModal: false,
};

const config = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return produce(state, draft => {
        draft.openModal = true;
      });

    case CLOSE_MODAL:
      return produce(state, draft => {
        draft.openModal = false;
      });

    default:
      return state;
  }
};

export default config;
