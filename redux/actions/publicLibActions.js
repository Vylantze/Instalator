import {
  addDocumentPublicAction,
  removeDocumentPublicAction,
  setShareablePublicAction,
  setUnshareablePublicAction,
} from './actionTypes';

/**
 * If message is provided, It will be shown instead of default Spinner Loading Message.
 * @param message, optional. display custom spinner message.
 */
function addDocumentPublic(document) {
  return dispatch => {
    dispatch(addDocumentPublicAction(document));
  }
}

function removeDocumentPublic(href) {
  return dispatch => {
    dispatch(removeDocumentPublicAction(href));
  }
}

function setShareablePublic(href) {
  return dispatch => {
    dispatch(setShareablePublicAction(href));
  }
}

function setUnshareablePublic(href) {
  return dispatch => {
    dispatch(setUnshareablePublicAction(href));
  }
}

module.exports = {
  addDocumentPublic,
  removeDocumentPublic,
  setShareablePublic,
  setUnshareablePublic,
};
