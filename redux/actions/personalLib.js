import {
  addDocumentPersonalAction,
  removeDocumentPersonalAction,
} from './actionTypes';

/**
 * If message is provided, It will be shown instead of default Spinner Loading Message.
 * @param message, optional. display custom spinner message.
 */
function addDocumentPersonal(document) {
  return dispatch => {
    dispatch(addDocumentPersonalAction(document));
  }
}

function removeDocumentPersonal(href) {
  return dispatch => {
    dispatch(removeDocumentPersonalAction(href));
  }
}

module.exports = {
  addDocumentPersonal,
  removeDocumentPersonal,
};
