const INITIAL_STATE = {
    login: '',
    password: '',
    session: {
        cookie: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGON':
            return { ...state, session: action.payload }
        case 'LOGIN_CHANGED':
            return { ...state, login: action.payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload }
        default:
            return state
    }
}