import { call, put, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from '../slices/authSlice';
import { auth } from '../../services';

function* handleLogin(action: ReturnType<typeof loginRequest>): any {
  try {
    // const user = yield call(auth.loginApi, action.payload);
    yield put(
      loginSuccess({
        id: '1',
        name: 'Nitesh Chowdhary',
        email: 'nitesh@gmail.com',
        token: 'nitz',
      }),
    );
  } catch (e: any) {
    yield put(loginFailure(e));
  }
}

function* handleLogout(): any {
  try {
    yield call(auth.logoutApi);
    yield put(logoutSuccess());
  } catch (e: any) {
    yield put(logoutFailure(e));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(logoutRequest.type, handleLogout);
}
