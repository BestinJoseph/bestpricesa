import Users from '../assets/data/users'

export const userLogin = ({email, password}) => (dispatch) => {
    Users.users.forEach( (user) => {
        if(user.email === email) {
            if(user.password === password) {
                dispatch({type: 'ERROR_FALSE'})
                dispatch({type: 'LOGIN_USER', payload: user})
            } else {
                dispatch({type: 'ERROR_TRUE', payload: "invalid password"})
            }
        } else {
            dispatch({type: 'ERROR_TRUE', payload: "invalid username"})
        }
    })
}

export const userLogout = () => (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
}