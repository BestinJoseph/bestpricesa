import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCar } from 'react-icons/ai'

import CatergoriesStyles from './CatergoriesStyles'

const Catergories = () => {
    const classes = CatergoriesStyles()

    return (
        <div style={{height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 5px 20px #d1d8e3', }}>
            <ul style={{ listStyle: 'none', padding: 0, }}>
                <li className={classes.categoriesItem}>
                    <p className={{}}><Link to="/cars"><AiFillCar className={classes.categoriesIcon} /></Link></p>
                </li>
            </ul>
        </div>
    )
}

export default Catergories

