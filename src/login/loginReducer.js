const INITIAL_STATE = {
    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
        case 'USER_LOGOUT':
        default:
            return state
    }
}