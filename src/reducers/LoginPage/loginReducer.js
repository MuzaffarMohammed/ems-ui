import { ON_LOGIN_SUBMIT_FAILURE, ON_LOGIN_SUBMIT_START, ON_LOGIN_SUBMIT_SUCCESS } from "../../constants/CONSTANTS";
import onLoginSubmitStartReducer from './onLoginSubmitFailureReducer';
import onLoginSubmitSuccessReducer from './onLoginSubmitSuccessReducer';
import onLoginSubmitFailureReducer from './onLoginSubmitFailureReducer';

const INITIAL_STATE = {};

const reducers = {

    [ON_LOGIN_SUBMIT_START]: onLoginSubmitStartReducer,
    [ON_LOGIN_SUBMIT_SUCCESS]: onLoginSubmitSuccessReducer,
    [ON_LOGIN_SUBMIT_FAILURE]: onLoginSubmitFailureReducer
}

/**
* This reducer is handling the Login Screen UI app all reducers
*
* @param {Object} state - the Redux state of the reducer that this function is
*  used for
* @param {*} action - the action dispatched with type and payload props.
* @returns {*} the next Redux state
*/
export const loginReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;
   const reducer = reducers[type];

   return (reducer) ? reducer(state, payload) : state;
};