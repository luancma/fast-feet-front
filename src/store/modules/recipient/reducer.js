import { FETCH_ALL_RECIPIENTS, FETCH_ALL_RECIPIENTS_SUCCESS, FETCH_ALL_RECIPIENTS_FAIL } from './actions';
import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
  loading: false,
};

const recipient = (state = INITIAL_STATE, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case FETCH_ALL_RECIPIENTS: {
        draft.loading = true;
        break;
      }
      case FETCH_ALL_RECIPIENTS_SUCCESS: {
        draft.loading = false;
        draft.recipients = payload.recipients
        break;
      }
      case FETCH_ALL_RECIPIENTS_FAIL: {
          draft.loading = false;
          break;
      }
      default:
    }
  });
};

export default recipient;
