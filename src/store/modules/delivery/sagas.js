import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ALL,
  SEARCH_DELIVERY,
  fetchAllSuccess,
  fetchAllFail,
  searchDeliverySuccess,
} from './actions';
import api from '~/services/api';

export function* fetchAll() {
  try {
    const response = yield call(api.get, 'order');

    const { deliveries } = response.data;

    yield put(fetchAllSuccess(deliveries));
  } catch (error) {
    yield put(fetchAllFail);
  }
}

export function* searchDelivery({ payload }) {
  const { searchTerm } = payload;

  try {
    const response = yield call(api.get, 'order', {
      params: {
        q: searchTerm,
      },
    });

    const { deliveries } = response.data;

    console.log(deliveries);

    yield put(searchDeliverySuccess(deliveries));
  } catch (error) {
    console.log('Error');
  }
}

export default all([
  takeLatest(FETCH_ALL, fetchAll),
  takeLatest(SEARCH_DELIVERY, searchDelivery),
]);
