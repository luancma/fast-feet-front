import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL, fetchAllSuccess, fetchAllFail } from './actions';
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

export default all([takeLatest(FETCH_ALL, fetchAll)]);
