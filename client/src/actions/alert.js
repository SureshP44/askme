import { SET_ALERT, REMOVE_ALERT } from './types';

//import uuid from 'react-uuid';

const setALert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = 1234;
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export default setALert;
