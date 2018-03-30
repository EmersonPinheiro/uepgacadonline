const INITIAL_STATE = {session: {cookie: ''}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGON':
            return { ...state, session: action.payload }
        case 'USER_LOGOUT':
        default:
            return state
    }
}