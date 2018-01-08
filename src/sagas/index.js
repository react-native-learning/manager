import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST
} from '../actions/types';

import {
  fetchLoginUser
} from './userSaga';

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield [
    takeEvery(LOGIN_REQUEST, fetchLoginUser),
    // takeEvery("USER_NOTES_FETCH_REQUESTED", fetchUserNotes),
    // takeEvery("USER_REPOS_FETCH_REQUESTED", fetchUserRepos),
    // takeEvery("USER_NOTE_POST_REQUESTED", postNote),

  ];
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;