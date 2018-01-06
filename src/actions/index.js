import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from './types';

import firebase from 'firebase';
// import { dispatch } from 'redux';

export const emailChange = (text) => {
  console.log('action:emailChange:text::', text)
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChange = (text) => {
  console.log('action:passwordChange:text::', text)
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: LOGIN_USER_SUCCESS, payload: user
        })
      });
  }
}
