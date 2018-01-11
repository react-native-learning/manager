import { combineReducers } from 'redux';

import NavReducer from './navReducer'
import AuthReducer from './authReducer';
import CurrencyReducer from './currencyReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  currency: CurrencyReducer
})
