import {
  SET_EXCHANGE
} from "../actions/types";

const INITAL_STATE = {
  currencyFrom: '',
  currencyTo: '',
  exchangeRate: ''
};

export default (state = INITAL_STATE, action) => {
  console.log('currencyReducer:action', action);
  switch (action.type) {
    case SET_EXCHANGE:
      console.log('currencyReducer:SET_EXCHANGE');
      return {
        ...state,
        currencyFrom: action.currencyFrom,
        currencyTo: action.currencyTo
      };
    default:
      return state;
  }
}
