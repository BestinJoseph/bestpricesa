import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const users = useSelector( state => state.users )

    useEffect( () => {
        checkUserToken()
    }, [users])

    const checkUserToken = () => {
        const userToken = localStorage.getItem('token')

        if(users.isAuthenticated === false ) {
            return <Navigate to="/" replace={true} />
        }
        return <Navigate to="/user" replace />
    }

    return (
        <>
            {
                users && users.isAuthenticated === true ? <Outlet />  : <Navigate to="/" replace={true} />
            }
        </>
    )
}

export default PrivateRoutes
