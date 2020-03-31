import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '~/services/api';
import { FETCH_ALL_RECIPIENTS, fetchAllRecipientsSuccess } from './actions';


export function* fetchAll(){
    const response = yield call(api.get, "recipients")
    try {
        if(response.data){
           yield put(fetchAllRecipientsSuccess(response.data))
        }
    } catch (error) {
        console.log(error)
    }
}


export default all([
    takeLatest(FETCH_ALL_RECIPIENTS, fetchAll),
  ]);
  