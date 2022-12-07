import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const navList = ["Expert Reviews", "Sales", "Guides", "How to use", "About Us"]

    return (
        <div style={{ display: 'flex', background: '#F5EBE0', padding: '0 2rem', marginTop: '1rem', borderRadius: '.25rem' }}>
            <ul style={{listStyle: 'none', borderRight: '1px solid blue', paddingLeft: 0, }}>
                <li style={{paddingRight: '2rem', }}>Categories</li>
            </ul>
            <ul style={{listStyle: 'none', display: 'flex', paddingLeft: '2rem', }}>
                {
                    navList && navList.map( (nav, i) => {
                        if (i + 1 !== navList.length) {
                            return <li key={i} style={{paddingRight: '1rem', }}><Link to={nav.split(' ')[0].toLowerCase()} style={{ textDecoration: 'none', hover: { fontSize: '2rem', } }}>{nav}</Link></li>
                        } else {
                            return <li key={i} style={{paddingRight: '2rem', }}><Link to={nav.split(' ')[0].toLowerCase()} style={{ textDecoration: 'none', hover: { fontSize: '2rem', } }}>{nav}</Link></li>
                        }
                    })
                }
            </ul>
            <ul style={{listStyle: 'none', borderLeft: '1px solid blue', paddingLeft: '2rem', }}>
                <li>Sing In</li>
            </ul>
        </div>
    )
}

export default NavBar
