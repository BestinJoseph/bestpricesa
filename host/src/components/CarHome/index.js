import React from 'react'
import { useLocation } from 'react-router-dom'
import CarHomeStyles from './CarHomeStyles'

const CarHome = () => {
    const location = useLocation()
    const classes = CarHomeStyles()

    // console.log(location)

    return (
        <div className={classes.carHomeContainer} >
            <div className={classes.carHomeInnerSection} >
                <h2>CarHome</h2>
            </div>
        </div>
    )
}

export default CarHome
