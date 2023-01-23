import Users from '../assets/data/users'

export const userLogin = ({email, password}) => (dispatch) => {
    Users.users.forEach( (user) => {
        if(user.email === email) {
            if(user.password === password) {
                dispatch({type: 'LOGIN_USER', payload: user})
            }
        }
    })
}

export const userLogout = () => (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
}