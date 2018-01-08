import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

const Routes = {
  login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Login',
    }
  },
  employeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'EmployeeList',
    }
  }
};

export default Routes;
