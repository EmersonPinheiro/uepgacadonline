const INITIAL_STATE = {grade: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DOCUMENT_FETCHED':
            return { ...state, grade: action.payload }
        default:
            return state
    }
}