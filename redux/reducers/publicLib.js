import {
  ADD_DOCUMENT_PUBLIC,
  REMOVE_DOCUMENT_PUBLIC,
} from '../actions/actionTypes';

import _ from 'lodash';

const initialState = {
  documentList: [
    { name: 'Document_1', lang: 'Japannese', link: '/public/file/Document_1_Japanese.png' },
    // { name: 'Document_2', lang: 'English', link: '/public/file/Document_2_English.png' },
    // { name: 'Document_3', lang: 'German', link: '/public/file/Document_3_German.png' },
  ],
}

function publicLib(state = initialState, action) {
  switch (action.type) {
    case ADD_DOCUMENT_PUBLIC: {
      let newState = _.cloneDeep(state);
      newState.documentList.push(action.payload);
      return newState;
    }
    case REMOVE_DOCUMENT_PUBLIC: {
      let newState = _.cloneDeep(state);
      newState.documentList.push(action.payload);
      return newState;
    }
    default:
      return state;
  }
}

module.exports = {
  publicLib,
};
