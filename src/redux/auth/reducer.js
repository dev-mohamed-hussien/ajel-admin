import actions from './actions';

const initState = { idToken:localStorage.getItem('idToken') || '' };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      localStorage.setItem('idToken' ,action.payload.token)
      return {
        idToken: action.payload.token,
      };
    case actions.LOGOUT:
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
      return {
        idToken:''
      };
    default:
      return state;
  }
}
