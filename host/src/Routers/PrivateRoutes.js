import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const users = useSelector( state => state.users )

    useEffect( () => {
        checkUserToken()
    }, [])

    console.log(users)

    const checkUserToken = () => {
        const userToken = localStorage.getItem('token')

        if(users.isAuthenticated === false ) {
            console.log('nice.....')
            return <Navigate to="/" replace={true} />
        }

        return <Navigate to="/user" replace />
    }

    return (
        <>
            {
                isAuth === true ? <Outlet />  : <Navigate to="/" replace={true} />
            }
        </>
    )
}

export default PrivateRoutes
