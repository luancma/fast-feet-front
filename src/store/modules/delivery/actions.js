export const FETCH_ALL = '@deliveries_FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@deliveries_FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAIL = '@deliveries_FETCH_ALL_FAIL';

export const fetchAll = () => ({
  type: FETCH_ALL,
});

export const fetchAllSuccess = deliveries => ({
  type: FETCH_ALL_SUCCESS,
  payload: {
    deliveries,
  },
});

export const fetchAllFail = () => ({
  type: FETCH_ALL_FAIL,
});
