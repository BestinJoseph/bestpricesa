import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Outlet, useParams } from 'react-router-dom'


import useStyles from './AdminLayoutStyles'

const AdminLayout = () => {
    const links = ['dashboard', 'cars', 'dealers', 'user', 'admin', ]
    const classes = useStyles()
    const active = useState('')
    const params = useLocation()

    console.log(params)

    return (
        <div>
            <div style={{ display: 'flex', background: 'gray', justifyContent: 'space-between', padding: '1rem', }}>
                <h2>Admin dashboard</h2>
                <div style={{ display: 'flex', }}>
                    <button>Stats</button>
                    <h3>Admin name</h3>
                </div>
            </div>
            <div className={classes.adminSideBar}>
                <div style={{ borderRight: '1px solid gray', minHeight: '25rem' }}>
                    <ul style={{ listStyle: 'none', paddingLeft: '0rem', paddingTop: '2.5rem', }}>
                        { links.map((link, i) => (
                            <Link key={i} to={{pathname: `${link}`}} className={classes.adminNavs}>{link}</Link>
                        ))}
                    </ul>
                </div>
                <div style={{ marginTop: '2rem', }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
