import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import HeaderStyles from './HeaderStyles'
import { getUser } from '../../Actions/index'

const Header = () => {
    const classes = HeaderStyles()
    const location = useLocation()
    const {users, errors } = useSelector( state => state )
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getUser())
    // },[dispatch])

    // console.log(errors)
    // console.log(users)

    return (
        <div>
            <div style={{display: errors && errors.failure === false ? 'none' : 'flex', background: 'yellow', height: '3rem', flexDirection: 'column', alignItems: 'center' }}>
                <h2>{ errors && errors.errors }</h2>
            </div>
            {
                location.pathname && location.pathname === '/' ? (
                    <div className={classes.bannerContainer}>
                        <div style={{ margin: '0 auto', width: '80%',}} >
                            <div style={{ display: 'flex', justifyContent: 'flex-end' , paddingTop: '1rem', }}>
                                {
                                    users && <NavBar users={users} well={"nice"} />
                                }
                            </div>
                            <div style={{width: '50%', display: 'flex', alignItems: 'center', height: '30rem', }}>
                                <div  style={{ borderRadius: '.75rem', padding: '2rem', width: '80%', backgroundColor: 'white', boxShadow: '0 0 4px gray',  }}>
                                    <h2 style={{ paddingBottom: '1.5rem', color: '#FCD271', }}>Best Price</h2>
                                    <h1 style={{ paddingBottom: '2rem', fontWeight: '400'}}>Compare prices on 2.6 million products dealer nearby</h1>
                                    <div style={{display: 'flex', alignItems: 'center', }}>
                                        <input type="text" style={{width: '80%', padding: '.5rem', fontSize: '1.5rem', borderRadius: '5px', marginRight: '1rem', }} placeholder="Search your cars dealer"/>
                                        <h3 style={{background: '#FCD271', padding: '.775rem', borderRadius: '5px', cursor: 'pointer', }}>Search</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ borderBottom: '1px solid gray', }}>
                        <div style={{width: '80%', margin: '0 auto', display: 'grid', gridTemplateRows: 'auto 3fr', }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                <div style={{display: 'flex', alignItems: 'center', }}>
                                    <h1 style={{marginRight: '1rem', }}><Link to="/" style={{color: '#FCD271', textDecorationLine: 'none', fontSize: '1.5rem', }}>BestPrice</Link></h1>
                                    <div><p>Riyadh</p></div>
                                </div>
                                <NavBar />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header
