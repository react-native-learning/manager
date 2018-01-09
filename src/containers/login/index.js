import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground
} from 'react-native';

// import { Card, CardSection, Input, Button, Spinner } from './common';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import * as UserAction from "../../actions";

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  onButtonPress() {
    console.log(this.props);
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onGoToSignUp() {
    this.props.goToSignUp();
  }

  // renderError() {
  //   if (this.props.error) {
  //     return (
  //       <View style={{ backgroundColor: 'white' }}>
  //         <Text style={styles.errTextStyle}>
  //           {this.props.error}
  //         </Text>
  //       </View>
  //     )
  //   }
  // }

  // renderButton() {
  //   if (this.props.loading) {
  //     return <Spinner size="large" />
  //   }
  //   return (
  //     <Button handleOnPress={this.onButtonPress.bind(this)}>
  //       <Text>Login</Text>
  //     </Button>
  //   )
  // }

  render() {
    return (

      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#FFF"
                style={styles.input}
                onChangeText={this.onEmailChange.bind(this)}
              // vaue={this.props.email}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                vaue={this.props.password}
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onButtonPress.bind(this)}
              activeOpacity={.5}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableHighlight
                activeOpacity={.5}
                onPress={this.onGoToSignUp.bind(this)}
              >
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ImageBackground>
      </View >

      // <Card>
      //   <CardSection>
      //     <Input
      //       label="Email"
      //       placeholder="email@example.com"
      //       onChangeText={this.onEmailChange.bind(this)}
      //       vaue={this.props.email}
      //     />
      //   </CardSection>

      //   <CardSection>
      //     <Input
      //       secureTextEntry
      //       label="Password"
      //       placeholder="Password"
      //       onChangeText={this.onPasswordChange.bind(this)}
      //       vaue={this.props.password}
      //     />
      //   </CardSection>

      //   {this.renderError()}

      //   <CardSection>
      //     {this.renderButton()}
      //   </CardSection>
      // </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    nav: state.nav
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(UserAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
