import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

import firebase from 'firebase';

export const emailChange = (text) => {
  console.log('action:emailChange:text::', text);
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChange = (text) => {
  console.log('action:passwordChange:text::', text);
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  console.log('action:loginUser', { email, password });
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('action:user', user);
        loginUserSuccess(dispatch, user);
      }).catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFail(dispatch));
      });
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, 
    payload: user,
  })
}

const loginUserFail = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_FAIL,

  })
}
