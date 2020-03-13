import produce from 'immer';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_FAILURE,
  SIGN_OUT,
} from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });

    case SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = payload.token;
        draft.signed = true;
        draft.loading = false;
      });

    case SIGN_FAILURE:
      return produce(state, draft => {
        draft.loading = false;
      });

    case SIGN_OUT:
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });

    default:
      return state;
  }
};

export default auth;
