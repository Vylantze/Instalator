import {
  ADD_DOCUMENT_PUBLIC,
  REMOVE_DOCUMENT_PUBLIC,
} from '../actions/actionTypes';

import _ from 'lodash';

const initialState = {
  documentList: [
    { name: 'Cinderella Girls Theater 811', lang: 'Japanese', 
     link: {
        'Japanese': '/public/img/example_manga.jpg', 
        'English': '/public/img/example_manga_english.png', 
      }, },
    // { name: 'Document_1', lang: 'Japannese', link: '/public/file/Document_1_Japanese.png' },
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
      newState.documentList.splice(newState.documentList.indexOf([action.payload]), 1);
      return newState;
    }
    default:
      return state;
  }
}

module.exports = {
  publicLib,
};
