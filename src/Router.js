import { StackNavigator } from 'react-navigation';
import { LoginForm } from './components/LoginForm';

const RootNavigator = StackNavigator({
  Home: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login',
    },
  }
});

export default RootNavigator;
