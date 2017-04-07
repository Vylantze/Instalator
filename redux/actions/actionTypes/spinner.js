import { createAction } from 'redux-actions';

const ENABLE_SPINNER = 'ENABLE_SPINNER';
const DISABLE_SPINNER = 'DISABLE_SPINNER'; 

module.exports = {
    ENABLE_SPINNER: ENABLE_SPINNER,
    enableSpinnerAction: createAction(ENABLE_SPINNER),
    DISABLE_SPINNER: DISABLE_SPINNER,
    disableSpinnerAction: createAction(DISABLE_SPINNER),
};