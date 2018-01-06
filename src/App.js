import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
