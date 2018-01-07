import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RootNavigator = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login',
    }
  },
  eployeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'EmployeeList',
    }
  }
});

export default RootNavigator;
