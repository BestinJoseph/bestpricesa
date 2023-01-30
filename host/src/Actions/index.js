import React from 'react'
import { Navigate } from 'react-router-dom'
import Users from '../assets/data/users'

export const userLogin = ({email, password}) => (dispatch) => {
    Users.users.forEach( (user) => {
        if(user.email === email && user.email !== '') {
            if(user.password === password && user.password !== '') {
                dispatch({type: 'ERROR_FALSE'})
                dispatch({type: 'LOGIN_USER', payload: user})
                return <Navigate to="/user" replace />
            } else {
                dispatch({type: 'ERROR_TRUE', payload: "invalid password"})
            }
        } else {
            dispatch({type: 'ERROR_TRUE', payload: "invalid username"})
        }
    })
}

export const userLogout = () => (dispatch) => {
    dispatch({type: 'ERROR_FALSE'})
    dispatch({type: 'LOGOUT_USER'})
    return <Navigate to="/" replace />
}

export const getUser = () => (dispatch) => {
    dispatch({ type: 'GET_USER' })
}
