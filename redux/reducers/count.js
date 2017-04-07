import {
  INCREASE_COUNT,
  DECREASE_COUNT,
} from '../actions/actionTypes';


const initialState = {
  value: 1
}

function count(state = initialState, action) {
	switch (action.type) {
		case INCREASE_COUNT: {
			let newState = Object.assign({}, state);
			newState.value = newState.value + 1;
			return newState;
		}
		case DECREASE_COUNT: {
			let newState = Object.assign({}, state);
			newState.value = newState.value - 1;
			return newState;
		}
		default: {
      		return initialState;
		}
	}
}

module.exports = {
  count,
};
