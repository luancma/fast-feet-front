import produce from 'immer';
import { SIGN_IN_SUCCESS } from '../auth/actions';

const INITIAL_STATE = {
  user: null,
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.user = payload.user;
      });

    default:
      return state;
  }
};

export default user;
