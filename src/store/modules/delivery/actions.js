export const FETCH_ALL = '@deliveries_FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@deliveries_FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAIL = '@deliveries_FETCH_ALL_FAIL';
export const SEARCH_DELIVERY = '@deliveries_SEARCH_DELIVERY';
export const SEARCH_DELIVERY_SUCCESS = '@deliveries_SEARCH_DELIVERY_SUCCESS';

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

export const searchDelivery = searchTerm => ({
  type: SEARCH_DELIVERY,
  payload: {
    searchTerm,
  },
});

export const searchDeliverySuccess = deliveries => ({
  type: SEARCH_DELIVERY_SUCCESS,
  payload: {
    deliveries,
  },
});
