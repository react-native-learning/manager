import { AppNavigator } from '../AppNavigation';
import { NavigationActions } from 'react-navigation';

// //Force a Init of the main router
// let initialNavState = AppNavigator.router.getStateForAction(
//   NavigationActions.init()
// );

// const firstAction = AppNavigator.router.getActionForPathAndParams("login");

// //Then calculate the state with a navigate action to the first route, sending the previous initialized state as argument
// initialNavState = AppNavigator.router.getStateForAction(
//   firstAction,
//   initialNavState
// );
// console.log('initialNavState', initialNavState);

const NavReducer = (state, action) => {
    console.log('state', state);
    console.log('action', action);
    let newState;

    switch (action.type) {
        case 'goToLogin':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'login' }),
                state
            );
            break;
        case 'goToEmployeeList':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'employeeList' }),
                state
            );
            break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;