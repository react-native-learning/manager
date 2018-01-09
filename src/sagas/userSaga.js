import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import authUtil from '../utils/authUtil';

import {
  loginUserSuccess,
  loginUserFail,
  goToHome
} from '../actions';

// worker Saga: will be fired on LOGIN_REQUEST actions
export function* fetchLoginUser(action) {
  console.log('fetchLoginUser', action);
  try {
    yield put(loginUserFail());
    const userInfo = yield call(authUtil.loginUser, action.email, action.password);
    if (userInfo) {
      console.log('userSaga:fetchLoginUser:userInfo', userInfo);
      yield put(loginUserSuccess(userInfo));

      // redirect to EmployeeList
      yield put(goToHome());
    } else {
      yield put(loginUserFail());
    }
  } catch (e) {
    console.log('error', e.message);
    yield put(loginUserFail());
  }
}
