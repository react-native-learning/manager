import { EMAIL_CHANGED } from "../actions/types";

const INITAL_STATE = { email: '' }

export default (state = INITAL_STATE, action) => {
  console.log('AuthReducer:action', action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return state;
    default:
      return state;
  }
}
