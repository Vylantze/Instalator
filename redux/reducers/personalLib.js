import {
  ADD_DOCUMENT_PERSONAL,
  REMOVE_DOCUMENT_PERSONAL,
  SET_SHAREABLE_PERSONAL,
  SET_UNSHAREABLE_PERSONAL,
} from '../actions/actionTypes';

import _ from 'lodash';

const initialState = {
  documentList: [
    //{ name: 'Document_1', lang: 'Japannese', link: '/public/file/Document_1_Japanese.png' },
    { name: 'Document_2', lang: 'English', link: {'English':'/public/file/Document_2_English.png'}, shareable:true, },
    { name: 'Document_3', lang: 'German', link: {'German':'/public/file/Document_3_German.png'}, shareable:true, },
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
      const location = newState.documentList.findIndex(function(element) {
        return element.name===action.payload.name;
      });
      newState.documentList.splice(location, 1);
      return newState;
    }
    case SET_SHAREABLE_PERSONAL: {
      let newState = _.cloneDeep(state);
      const location = newState.documentList.findIndex(function(element) {
        return element.name===action.payload.name;
      });
      if (location>=0) {
        newState.documentList[location].shareable = true;
      }
      return newState;
    }
    case SET_UNSHAREABLE_PERSONAL: {
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
  personalLib,
};
