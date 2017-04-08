import {
  ADD_DOCUMENT_PUBLIC,
  REMOVE_DOCUMENT_PUBLIC,
  SET_SHAREABLE_PUBLIC,
  SET_UNSHAREABLE_PUBLIC,
} from '../actions/actionTypes';

import _ from 'lodash';

const initialState = {
  documentList: [
    { name: 'Cinderella Girls Theater 811', lang: 'Japanese', shareable:true,
     link: {
        'Japanese': '/public/file/example_manga.jpg', 
        'English': '/public/file/example_manga_english.png', 
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
      const location = newState.documentList.findIndex(function(element) {
        return element.name===action.payload.name;
      });
      newState.documentList.splice(location, 1);
      return newState;
    }
    case SET_SHAREABLE_PUBLIC: {
      let newState = _.cloneDeep(state);
      const location = newState.documentList.findIndex(function(element) {
        return element.name===action.payload.name;
      });
      if (location>=0) {
        newState.documentList[location].shareable = true;
      }
      return newState;
    }
    case SET_UNSHAREABLE_PUBLIC: {
      let newState = _.cloneDeep(state);
      const location = newState.documentList.findIndex(function(element) {
        return element.name===action.payload.name;
      });
      if (location>=0) {
        newState.documentList[location].shareable = false;
      }
      return newState;
    }
    default:
      return state;
  }
}

module.exports = {
  publicLib,
};
