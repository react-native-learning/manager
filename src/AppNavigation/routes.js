import LoginForm from '../containers/login';
import SignUpScreen from '../containers/signup';
import HomeScreen from '../containers/home';

const Routes = {
  login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
    }
  },
  signup: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'signup',
    }
  },
  home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'home',
    }
  }
};

export default Routes;
