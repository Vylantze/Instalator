import {
  addDocumentPublicAction,
  removeDocumentPublicAction,
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

module.exports = {
  addDocumentPublic,
  removeDocumentPublic,
};
