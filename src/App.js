import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXpPjDs7UNp2ydi2vAr9VHmbtepq1Xs-c",
      authDomain: "react-native-2b57f.firebaseapp.com",
      databaseURL: "https://react-native-2b57f.firebaseio.com",
      projectId: "react-native-2b57f",
      storageBucket: "",
      messagingSenderId: "1033782716030"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
