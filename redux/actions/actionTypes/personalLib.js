import { createAction } from 'redux-actions';

const ADD_DOCUMENT_PERSONAL = 'ADD_DOCUMENT_PERSONAL';
const REMOVE_DOCUMENT_PERSONAL = 'REMOVE_DOCUMENT_PERSONAL';

module.exports = {
    ADD_DOCUMENT_PERSONAL: ADD_DOCUMENT_PERSONAL,
    REMOVE_DOCUMENT_PERSONAL: REMOVE_DOCUMENT_PERSONAL,
    addDocumentPersonalAction : createAction(ADD_DOCUMENT_PERSONAL),
    removeDocumentPersonalAction : createAction(REMOVE_DOCUMENT_PERSONAL),
};