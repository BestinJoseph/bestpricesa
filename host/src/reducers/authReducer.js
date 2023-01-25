const initialState = {
    user: {},
    isAuthenticated: false,
    role: ''
}

const userLog = { user: {name: 'Mohammed Basha'}, isAuthenticated: 'true', role: 'admin'}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, user: action.payload, isAuthenticated: true, role: action.payload.role}
        case "LOGOUT_USER":
            return initialState
        default:
            return state
    }
}