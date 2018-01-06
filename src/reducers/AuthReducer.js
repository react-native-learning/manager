import { EMAIL_CHANGED } from "../actions/types";

const INITAL_STATE = { email: '' }

export default (state = INITAL_STATE, action) => {
  console.log('AuthReducer:action', action);

  switch (action.type) {
    case EMAIL_CHANGED:
      // state.email = action.payload;
      let newState = { ...state, email: action.payload };
      console.log('AuthReducer:newState', newState);
      return newState;
    default:
      return state;
  }
}
