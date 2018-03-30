const INITIAL_STATE = {document: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DOCUMENT_FETCHED':
            return { ...state, document: action.payload }
        default:
            return state
    }
}