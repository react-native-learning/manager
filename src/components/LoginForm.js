import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

import { connect } from 'react-redux';
import { emailChange, passwordChange } from '../actions';

export class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            vaue={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            vaue={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChange, passwordChange })(LoginForm);
