import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "../actions/types";

const INITAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITAL_STATE, action) => {
  let newState = state;
  console.log('AuthReducer:action', action);

  switch (action.type) {
    case EMAIL_CHANGED:
      newState = { ...state, email: action.payload };
      console.log('AuthReducer:newState(EMAIL_CHANGED)', newState);
      return newState;
    case PASSWORD_CHANGED:
      newState = { ...state, password: action.payload };
      console.log('AuthReducer:newState(PASSWORD_CHANGED)', newState);
      return newState;
    case LOGIN_USER_SUCCESS:
      newState = { ...state, user: action.payload };
      console.log('AuthReducer:newState(LOGIN_USER_SUCCESS)', newState);
      return newState;
    case LOGIN_USER_FAIL:
      newState = { ...state, error: 'Authentication Failed.' };
      console.log('AuthReducer:newState(LOGIN_USER_FAILED)', newState);
      return newState;
    default:
      return newState;
  }
}
