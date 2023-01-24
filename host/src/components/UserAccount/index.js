import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../Actions'

import UserAccountStyles from './UserAccountStyles'

const UserAccount = () => {
    const classes = UserAccountStyles()
    const tabs = ["Account Overviews", "Edit Profile", "Change password", "Notification Setting", "LogOut"]
    const dispatch = useDispatch()

    const handleTab = (tab) => {
        if( tab === 'LogOut' ) {
            dispatch(userLogout())
        } else {
            console.log(tab)
        }
    }

    return (
        <div style={{ background: 'black', paddingBottom: '4rem' }}>
            <div className={classes.userAccountBanner} style={{ backgroundImage: `url('/images/account.jpg')`}}>
                <div style={{ padding: '4rem', width: '40%', }}>
                    <h1 style={{ marginBottom: '1rem', fontSize: '3.5rem', }}>Best Price offers great deal of saving</h1>
                    <p style={{ marginBottom: '1.5rem', }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, velit! In iusto officia repellendus distinctio!</p>
                    <button style={{ backgroundColor: '#FCD271', border: 'none', padding: '1rem', fontSize: '1.25rem', cursor: 'pointer', }}>Explore more</button>
                </div>
            </div>
            <div style={{ width: '80%', margin: '0 auto', height: '40rem', display: 'grid', gridTemplateColumns: '1fr 5fr', }}>
                <div style={{ padding: '2rem 0rem', background: '#070c10', color: 'white', }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem', }}>
                        <VscAccount style={{ fontSize: '5rem', color: '#411d13', }}/>
                    </div>
                    <ul style={{ listStyle: 'none', padding: '0', }}>
                        {
                            tabs.map( (tab, i) => (
                                <li key={i} className={classes.tabItem} onClick={() => handleTab(tab)}>{tab}</li>
                            ))
                        }
                    </ul>
                </div>
                <div style={{ border: '1px solid #411d13', background: 'white', padding: '3rem 2rem', }}>
                    <h4>Acount information goes here as per navigation.</h4>
                </div>
            </div>
        </div>
    )
}

export default UserAccount