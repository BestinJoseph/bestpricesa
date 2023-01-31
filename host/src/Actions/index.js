import React from 'react'
import { Navigate } from 'react-router-dom'
import Users from '../assets/data/users'

export const userLogin = ({email, password}) => (dispatch) => {
    console.log(email)
    let count = 0
    try {
        const filteredUsername = Users.users.filter( user => user.email === email )

        if (filteredUsername.length <= 0) throw "Invalid credntials"

        filteredUsername.map( fUser => {
            if (fUser.password === password) {
                dispatch({type: 'LOGIN_USER', payload: fUser})
                dispatch({type: 'ERROR_FALSE'})
            } else {
                throw "Invalid credntials"
            }
        })
    } catch (err) {
        dispatch({type: 'ERROR_TRUE', payload: err})
        return <Navigate to="/user" replace />
    }
}

export const userLogout = () => (dispatch) => {
    <Navigate to="/" replace />
    dispatch({type: 'ERROR_FALSE'})
    dispatch({type: 'LOGOUT_USER'})
    // return 
}

export const getUser = () => (dispatch) => {
    dispatch({ type: 'GET_USER' })
}
