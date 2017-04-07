import {
  ENABLE_SPINNER,
  DISABLE_SPINNER,
} from '../actions/actionTypes';

const initialState = {
  show: false,
}

function spinner(state = initialState, action) {
  switch (action.type) {
    case ENABLE_SPINNER: {
      return Object.assign({}, state, {
        show: true,
        message: action.payload
      })
    }
    case DISABLE_SPINNER: {
      return Object.assign({}, state, {
        show: false,
        message: ''
      })
    }
    default:
      return state;
  }
}

module.exports = {
  spinner,
};
