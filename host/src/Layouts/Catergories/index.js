import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCar } from 'react-icons/ai'

import CatergoriesStyles from './CatergoriesStyles'

const Catergories = () => {
    const classes = CatergoriesStyles()

    return (
        <div style={{height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '-5px 0 white, 5px 0 white, 0px 5px 2px 0px #e9ecef', }}>
            <ul style={{ listStyle: 'none', padding: 0, }}>
                <li className={classes.categoriesItem}>
                    <p className={{}}><Link to={{pathname: `/catergories/cars`, query: {cat: 'cars'}}}><AiFillCar className={classes.categoriesIcon} /></Link></p>
                </li>
            </ul>
        </div>
    )
}

export default Catergories

