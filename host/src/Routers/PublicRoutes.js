import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const dispatch = useDispatch()
    const users = useSelector( state => state.users )

    useEffect( () => {
        checkUserToken()
    }, [dispatch])

    const checkUserToken = () => {
        const userToken = localStorage.getItem('token')

        if( users.isAuthenticated === true ) {
            return <Outlet />
        }

        setIsAuth(false)
    }

    return (
        <>
            {
                isAuth === true ? children  : null
            }
        </>
    )
}

export default PublicRoutes