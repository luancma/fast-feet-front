import produce from 'immer';
import {
  FETCH_ALL_SUCCESS,
  FETCH_ALL,
  FETCH_ALL_FAIL,
  SEARCH_DELIVERY,
  SEARCH_DELIVERY_SUCCESS,
} from './actions';

const INITIAL_STATE = {
  loading: false,
  deliveries: [],
};

const delivery = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_ALL:
      return produce(state, draft => {
        draft.loading = true;
      });
    case FETCH_ALL_FAIL:
      return produce(state, draft => {
        draft.loading = false;
      });
    case FETCH_ALL_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.deliveries = payload.deliveries;
      });
    case SEARCH_DELIVERY:
      return produce(state, draft => {
        draft.loading = true;
      });
    case SEARCH_DELIVERY_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.deliveries = payload.deliveries;
      });

    default:
      return state;
  }
};

export default delivery;
