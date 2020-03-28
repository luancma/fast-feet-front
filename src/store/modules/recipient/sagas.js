import {all} from 'redux-saga/effects'


export function* fetchAll(){

}


export default all([
    takeLatest(FETCH_ALL, fetchAll),
  ]);
  