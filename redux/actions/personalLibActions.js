import {
  addDocumentPersonalAction,
  removeDocumentPersonalAction,
  setShareablePersonalAction,
  setUnshareablePersonalAction,
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

function setShareablePersonal(href) {
  return dispatch => {
    dispatch(setShareablePersonalAction(href));
  }
}

function setUnshareablePersonal(href) {
  return dispatch => {
    dispatch(setUnshareablePersonalAction(href));
  }
}

module.exports = {
  addDocumentPersonal,
  removeDocumentPersonal,
  setShareablePersonal,
  setUnshareablePersonal,
};
