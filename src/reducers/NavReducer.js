import { AppNavigator } from '../appNavigation';
import { NavigationActions } from 'react-navigation';

import {
    GOTO_HOME,
    GOTO_LOGIN,
    GOTO_SIGNUP
} from '../actions/types';

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
        case GOTO_LOGIN:
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'login' }),
                state
            );
            break;
        case GOTO_SIGNUP:
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'signup' }),
                state
            );
            break;
        case GOTO_HOME:
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'home' }),
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