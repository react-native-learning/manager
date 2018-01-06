import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('action:usersssss', user);
        loginUserSuccess(dispatch, user);
      }).catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            loginUserSuccess(dispatch, user);
          })
          .catch(err => {
            dispatch({
              type: LOGIN_USER_FAILED
            })
          })
      });
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, payload: user
  })
}
