import LoginForm from '../containers/login';
import SignUpScreen from '../containers/signup';
import HomeScreen from '../containers/home';
import SideBar from '../containers/sideBar';
import ResultScreen from '../containers/result';
import BookingPayment from '../containers/bookingSelectPaymentType';
import BookingSelectDate from '../containers/bookingSelectDate';

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
  },
  result: {
    screen: ResultScreen,
    navigationOptions: {
      title: 'result',
    }
  },
  selectPayment: {
    screen: BookingPayment,
    navigationOptions: {
      title: 'Select Payment',
    }
  },
  selectDate: {
    screen: BookingSelectDate,
    navigationOptions: {
      title: 'Select Date',
    }
  }
};

export default Routes;
