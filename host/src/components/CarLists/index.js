import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Cars from './Cars.json'
import care from '../../assets/images/car.jpg'
import carTwo from '../../assets/images/cars.jpg'
import { Dealers } from './Dealers'

import CarListsStyles from './CarListsStyles'

const CarLists = () => {
    const specs = ["seater", "shift", "milage", "body-type"]
    const classes = CarListsStyles()
    const navigate = useNavigate()
    
    // console.log(Cars.cars)

    const handleCarBtn = (car) => {
        navigate("/cars/nice")
    }

    return (
        <div style={{ margin: '3rem 0', }}>
            {
                Cars && Cars.cars.map( (car, i) => (
                    <div style={{ width: '80vw', margin: '0 auto', height: '25rem', }} key={i}>
                        <div style={{padding: '3rem 0rem 3rem 3rem', display: 'flex', }}>
                            <div style={{width: '30%', }}>
                                <img src={carTwo} alt="Car Image" width="300rem" height="150px" />
                            </div>
                            <div style={{width: '30%', }}>
                                <h6 style={{ padding: '7px 15px', background: 'green', borderRadius: '15px', display: 'inline-block', color: 'white', marginBottom: '.5rem', }}>Top Pick</h6>
                                <h3>Chevy Sparx <span> or similar product</span></h3>
                                <p>High demand car</p>
                                <div style={{marginTop: '1rem', }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', }}>
                                        {
                                            specs && specs.map( (spe, i) => (
                                                <div key={i} style={{ width: '100%', marginBottom: '.5rem', }}>
                                                    {
                                                        Object.entries(car.spec).map( (val, i) => (
                                                            <div key={i} style={{}}>
                                                                {
                                                                    val[0] === spe ? ( <div style={{ display: 'flex', }}>{`${spe}: ${val[1]}`}</div> ) : null
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div style={{ marginTop: '1.5rem', }}>
                                        <p>best price</p>
                                        <h2>SAR 60,000</h2>
                                        <p>Free Consulting</p>
                                    </div>
                                    <div className={classes.carlistBtnContainer} onClick={handleCarBtn}>
                                        <p style={{fontSize: '1rem', color: 'white',  }}>view more</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '40%', }}>
                                <Dealers />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CarLists