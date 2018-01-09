import LoginForm from '../containers/login';
import SignUpScreen from '../containers/signup';
import HomeScreen from '../containers/home';
import SideBar from '../containers/sideBar';

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
  },
  sidebar: {
    screen: SideBar,
    navigationOptions: {
      title: 'sideBar',
    }
  }
};

export default Routes;
