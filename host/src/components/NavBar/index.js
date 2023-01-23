import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsHeart } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import { VscAccount, VscChromeClose } from 'react-icons/vsc'

import { userLogin, userLogout } from '../../Actions'
import NavBarStyles from './NavBarStyles'

const NavBar = () => {
    const { pathname } = useLocation()
    const navList = ["Expert Reviews", "Our Guides", "How to use", "About Us"]
    const users = useSelector( state => state.users)
    const dispatch = useDispatch()
    const classes = NavBarStyles()
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    const handleSignIn = () => {
        setLogin(false)
        dispatch(userLogin())
    }

    const handleUserAccount = () => {
        console.log('nice')
        navigate('/user')
        // dispatch(userLogout())
    }

    console.log(pathname)

    return (
        <div className={classes.navContainer}>
            <div style={{ display: 'flex', background: 'white', padding: '0 2rem', borderRadius: '.25rem', alignItems: 'center', }}>
                <ul style={{listStyle: 'none', borderRight: '1px solid #FCD271', paddingLeft: 0, }}>
                    <li style={{paddingRight: '2rem', color: '#FCD271', fontWeight: 700, cursor: 'pointer' }}>Categories</li>
                </ul>
                <ul style={{listStyle: 'none', display: 'flex', paddingLeft: '2rem', }}>
                    {
                        navList && navList.map( (nav, i) => {
                            if (i + 1 !== navList.length) {
                                return <li key={i} style={{paddingRight: '1rem', }}>
                                            <Link to={nav.split(' ')[0].toLowerCase()} className={classes.navItems} >{nav}</Link>
                                        </li>
                            } else {
                                return <li key={i} style={{paddingRight: '2rem', }}>
                                            <Link to={nav.split(' ')[0].toLowerCase()} className={classes.navItems} >{nav}</Link>
                                        </li>
                            }
                        })
                    }
                </ul>
                <ul style={{listStyle: 'none', borderLeft: '1px solid #FCD271', paddingLeft: '2rem', }}>
                    { users.isAuthenticated === 'true' ? 
                        <div style={{display:'flex', alignItems: 'center', }}>
                            <li style={{cursor: 'pointer', marginRight: '1rem', height: '1.15rem', }}>
                                <BsHeart style={{fontSize: '1.15rem', color: 'black', }} />
                            </li>
                            <li style={{cursor: 'pointer', marginRight: '1rem', }}>
                                <MdNotificationsNone style={{fontSize: '1.35rem', color: 'black', }} />
                            </li>
                            <li onClick={handleUserAccount} style={{cursor: 'pointer', }}>
                                <VscAccount style={{fontSize: '1.35rem', color: 'black', }} />
                            </li>
                            {/* <li onClick={handleSignOff} style={{cursor: 'pointer', }}>Log Out</li> */}
                        </div> : 
                        <li style={{cursor: 'pointer', }} onClick={() => setLogin(true)}>Sing In</li> 
                    }
                </ul>
            </div>
            <div className={classes.loginContainer} style={{ display: login ? 'block' : 'none', }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', }}>
                    <h3 style={{  }}>Login</h3>
                    <VscChromeClose style={{ cursor: 'pointer', fontSize: '1.2rem', }} onClick={() => setLogin(false)} />
                </div>
                <input type="text" placeholder="username" style={{ width: '15rem', padding: '.5rem', marginBottom: '1rem', fontSize: '1rem', }} /><br />
                <input type="text" placeholder="password" style={{ width: '15rem', padding: '.5rem', marginBottom: '1rem', fontSize: '1rem', }} /><br />
                <input type="submit" value="Login" className={classes.loginBtn} onClick={handleSignIn} />
            </div>
        </div>
    )
}

export default NavBar
