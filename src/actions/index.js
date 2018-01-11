import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,

  GOTO_HOME,
  GOTO_LOGIN,
  GOTO_SIGNUP,
  GOTO_RESULT
} from './types';

// import firebase from 'firebase';

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
  return {
    type: LOGIN_REQUEST,
    email,
    password
  };
  // return (dispatch) => {
  //   dispatch({ type: LOGIN_REQUEST });

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(user => {
  //       console.log('action:user', user);
  //       loginUserSuccess(dispatch, user);
  //     }).catch(() => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then((user) => {
  //           loginUserSuccess(dispatch, user);
  //         })
  //         .catch(() => loginUserFail(dispatch));
  //     });
  // }
}

export const loginUserSuccess = (user) => {
  console.log('action:loginUserSuccess', user);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
}

export const loginUserFail = () => {
  console.log('action:loginUserFail');
  return {
    type: LOGIN_USER_FAIL,
    error: 'Authentication Failed.'
  }
}

export const goToHome = () => {
  console.log('action:goToHome');
  return {
    type: GOTO_HOME
  }
}

export const goToLogin = () => {
  console.log('action:goToLogin');
  return {
    type: GOTO_LOGIN
  }
}

export const goToSignUp = () => {
  console.log('action:goToSignUp');
  return {
    type: GOTO_SIGNUP
  }
}

export const goToResult = () => {
  console.log('action:goToResult');
  return {
    type: GOTO_RESULT
  }
}
