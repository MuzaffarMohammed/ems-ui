import {history} from '../../helpers/history'; 
import {ON_LOGIN_SUBMIT_SUCCESS } from '../../constants/CONSTANTS';
import {ON_LOGIN_SUBMIT_FAILURE} from '../../constants/CONSTANTS';
import {ON_LOGIN_SUBMIT_START } from '../../constants/CONSTANTS';



const onLoginSubmitAction = (userName, password, from) => (dispatch, getState) => {
    dispatch(onLoginSubmitStart());
    if (userName === 'admin' && password === 'admin') {
        dispatch(onLoginSubmitSuccess());
        localStorage.setItem('user', 'admin');
        history.push(from);
    } else {
      alert('Incorrect Credntials!');
    }
}

const onLoginSubmitStart = payload => ({type : ON_LOGIN_SUBMIT_START, payload});
const onLoginSubmitSuccess = payload => ({type : ON_LOGIN_SUBMIT_SUCCESS, payload});
const onLoginSubmitFailure = payload => ({type : ON_LOGIN_SUBMIT_FAILURE, payload});

export default onLoginSubmitAction;