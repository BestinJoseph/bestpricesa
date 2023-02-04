import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import useStyles from './DealerDashboardStyles'

const DealerDashboard = () => {
    const classes = useStyles()
    const dashboardMenus = [ "cars", "account", ]
    const [menuCSS, setMenuCSS] = useState('')

    const handleButton = (menu) => {
        if (menu === '') {
            setMenuCSS('')
        } else {
            setMenuCSS(menu)
        }
    }

    return (
        <React.Fragment>
            <div style={{ height: '5rem', display: 'flex', alignItems: 'center', padding: '0 1rem', borderBottom: '1px solid gray', }}>
                <h3>Saudi - BestPrice Dashboard</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr', marginTop: '2rem', gridColumnGap: '2rem', }}>
                <div style={{paddingBottom: '5rem', borderRight: '1px solid gray', }}>
                    <Link to={`/`} style={{background: menuCSS === '' ? '#ECF9FF' : '#fff', display: 'block', }} className={ classes.linkStyles } onClick={() => handleButton('')}>Dashboard</Link>
                    <ul style={{display: 'flex', flexDirection: 'column', }}>
                        {
                            dashboardMenus.map( (menu, i) => (
                                <Link to={`/dashboard/${menu}`} style={{background: menuCSS === menu ? '#ECF9FF' : '#fff'}} className={ classes.linkStyles } key={i} onClick={() => handleButton(menu)}>{ menu }</Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    {/* <h1>welcome</h1> */}
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DealerDashboard
