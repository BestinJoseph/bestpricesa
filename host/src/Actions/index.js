

export const userLogin = () => (dispatch) => {
    dispatch({type: 'LOGIN_USER', payload: 'cool'})
}

export const userLogout = () => (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
}