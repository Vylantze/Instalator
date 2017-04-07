import {
  ADD_DOCUMENT_PERSONAL,
  REMOVE_DOCUMENT_PERSONAL,
} from '../actions/actionTypes';

import _ from 'lodash';

const initialState = {
  documentList: [
    //{ name: 'Document_1', lang: 'Japannese', link: '/public/file/Document_1_Japanese.png' },
    { name: 'Document_2', lang: 'English', link: {'English':'/public/file/Document_2_English.png'}, },
    { name: 'Document_3', lang: 'German', link: {'German':'/public/file/Document_3_German.png'}, },
  ],
}

function personalLib(state = initialState, action) {
  switch (action.type) {
    case ADD_DOCUMENT_PERSONAL: {
      let newState = _.cloneDeep(state);
      newState.documentList.push(action.payload);
      return newState;
    }
    case REMOVE_DOCUMENT_PERSONAL: {
      let newState = _.cloneDeep(state);
      newState.documentList.push(action.payload);
      return newState;
    }
    default:
      return state;
  }
}

module.exports = {
  personalLib,
};
