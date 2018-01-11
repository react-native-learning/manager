import {
  SET_EXCHANGE
} from "../actions/types";

const INITAL_STATE = {
  currencyFrom: '',
  currencyTo: '',
  exchangeRate: ''
};

export default (state = INITAL_STATE, action) => {
  console.log('authReduce:action', action);
  switch (action.type) {
    case SET_EXCHANGE:
      return { ...state, exchange: action.payload };
    default:
      return state;
  }
}
