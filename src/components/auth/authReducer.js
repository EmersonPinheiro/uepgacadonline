const INITIAL_STATE = {
    name: '',
    login: '',
    password: '',
    cookie: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN':
            console.log(action.payload.cookie)
            return { ...state, cookie: action.payload.cookie, name: action.payload.name }
        case 'LOGIN_CHANGED':
            return { ...state, login: action.payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload }
        case 'USER_LOGIN_IN_FAILED':
            return INITIAL_STATE
        default:
             return state
    }
}