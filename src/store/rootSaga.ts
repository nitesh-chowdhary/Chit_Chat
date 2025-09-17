import { all, fork } from 'redux-saga/effects';
import authSaga from './sagas/authSaga.ts';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    // fork more sagas as per needed
  ]);
}
