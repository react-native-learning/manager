import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
// import firebase from 'firebase';

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import getStore from "./store";

// import reducers from './reducers';
// import RootNavigator from './Router.js';
import AppNavigation from './AppNavigation';

class App extends Component {
  store = getStore();

  componentWillMount() {
    
  }

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={this.store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
