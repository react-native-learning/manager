import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from "../actions/types";

const INITAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITAL_STATE, action) => {
  let newState = state;
  console.log('AuthReducer:action', action);

  switch (action.type) {
    case EMAIL_CHANGED:
      // state.email = action.payload;
      newState = { ...state, email: action.payload };
      console.log('AuthReducer:newState', newState);
      return newState;
    case PASSWORD_CHANGED:
      // state.email = action.payload;
      newState = { ...state, password: action.payload };
      console.log('AuthReducer:newState', newState);
      return newState;
    default:
      return newState;
  }
}
