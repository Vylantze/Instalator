import { createAction } from 'redux-actions';

const ADD_DOCUMENT_PUBLIC = 'ADD_DOCUMENT_PUBLIC';
const REMOVE_DOCUMENT_PUBLIC = 'REMOVE_DOCUMENT_PUBLIC';

module.exports = {
    ADD_DOCUMENT_PUBLIC: ADD_DOCUMENT_PUBLIC,
    REMOVE_DOCUMENT_PUBLIC: REMOVE_DOCUMENT_PUBLIC,
    addDocumentPublicAction : createAction(ADD_DOCUMENT_PUBLIC),
    removeDocumentPublicAction : createAction(REMOVE_DOCUMENT_PUBLIC),
};