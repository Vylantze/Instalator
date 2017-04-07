import {
  enableSpinnerAction,
  disableSpinnerAction,
} from './actionTypes';

/**
 * If message is provided, It will be shown instead of default Spinner Loading Message.
 * @param message, optional. display custom spinner message.
 */
function enableSpinner(message) {
  return dispatch => {
    dispatch(enableSpinnerAction(message));
  }
}

function disableSpinner() {
  return dispatch => {
    dispatch(disableSpinnerAction());
  }
}

module.exports = {
  enableSpinner,
  disableSpinner,
};
