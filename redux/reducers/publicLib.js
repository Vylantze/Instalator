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
  docList: {
    'Cinderella Girls Theater 811': { 
      name: 'Cinderella Girls Theater 811', 
      lang: 'Japanese', // original language
      link: {
        'Japanese': '/public/img/example_manga.jpg', 
        'English': '/public/img/example_manga_english.png', 
      },
      img: true, // is it an image, if it is, img details
      imgHeight: '2103px', 
      imgWidth: '480px', 
      overlayLocations: [
        [ 83, 1.5, 13, 10, ],
        [ 7, 15, 13, 8, ],
        [ 86, 26.5, 13, 13, ],
        [ 1, 26.5, 16, 10, ],
        [ 78, 46, 16, 10, ],
        [ 21, 47, 16, 10, ],
        [ 85, 64.2, 14, 12, ],
        [ 1, 64.2, 20, 12, ],
        [ 85, 83.05, 14, 16, ],
        [ 1, 83.05, 19, 12, ],
      ],
      translatedLines: {
        English: [
          "This is truly a refined place, isn't it?",
          'Producer',
          'Both the atmos-phere and the food here are top class.',
          'I might have drunk too much because of that...',
          'But for tonight at the very least...',
          'Let us enjoy this time to the fullest',
          'Oh? Am I not going to say any puns today, you ask?',
          'I am not so uncivilised that I would ruin such an evening with one',
          'So for this Christmas with just the two of us, let us enjoy...',
          'This Holy Night, with all our migh-',
        ],
      },
    },
  },
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
