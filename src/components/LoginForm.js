import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

import { connect } from 'react-redux';
import { emailChange } from '../actions';

export class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
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

export default connect(null, { emailChange })(LoginForm);
