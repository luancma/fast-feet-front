import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SIGN_IN_REQUEST, signInSuccess, signFailure } from './actions';
import api from '~/services/api';
import { history } from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
    toast.success('Bem vindo!');
    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error(
      'Falha ao acessar o sistema, verifique os dados verifique os dados informados'
    );
  }
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
