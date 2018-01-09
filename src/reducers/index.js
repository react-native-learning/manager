import { combineReducers } from 'redux';

import NavReducer from './navReducer'
import AuthReducer from './authReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
})
