import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
          />
        </CardSection>

        <Input
          secureTextEntry
          label="Password"
          placeholder="Password"
        />

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
