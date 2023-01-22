import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Dealers } from './Dealers'

import CarListsStyles from './CarListsStyles'
import { getAllCars } from '../../Actions/searchAction'

const CarLists = () => {
    const classes = CarListsStyles()
    const navigate = useNavigate()
    const { cars } = useSelector( state => state.cars )
    const dispatch = useDispatch()

    useLayoutEffect(()=>{
        dispatch(getAllCars())
    },[dispatch])

    const handleCarBtn = (car) => {
        navigate("/cars/nice")
    }

    // console.log(process.env)
    console.log(cars)

    return (
        <div style={{ margin: '3rem 0', }}>
            {
                cars.length > 0 ? cars.map( (car, i) => (
                    <div className={classes.carItemContainer} key={i}>
                        <div style={{padding: '1rem 0rem 3rem 0rem', display: 'flex', }}>
                            <div style={{width: '30%', marginRight: '2rem', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                                <img src={`/cars/${car?.image}`} alt={car.model} width="300px" height="auto" className={classes.carItemImage} />
                            </div>
                            <div style={{width: '30%', }}>
                                <h6 style={{ padding: '7px 15px', background: '#FCD271', borderRadius: '15px', display: 'inline-block', color: '#C00000', marginBottom: '.5rem', }}>Top Pick</h6>
                                <h3>{car.make}<span> {car.model}</span></h3>
                                <p style={{color: 'green'}}>High Demand car</p>
                                <div style={{marginTop: '1rem', }}>
                                    <div style={{ display: 'flex', }}>
                                        {
                                            Object.entries(car.spec).map( (val, i) => (
                                                <div key={i} style={{ display: 'flex', padding: '.5rem 1rem', border: '1px solid gray', marginRight: '.75rem', borderRadius: '10px',  }}>
                                                    <p style={{marginRight: '.5rem'}}>{val[0]}:</p> <p>{val[1]}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', }}>
                                        <div style={{ marginRight: '2rem',}}>
                                            <p style={{color: 'blue', }}>best price</p>
                                            <h1 style={{marginBottom: '.25rem', }}>{ car.price }</h1>
                                        </div>
                                        <p>Free Test Drive</p>
                                    </div>
                                    <div className={classes.carlistBtnContainer} onClick={handleCarBtn}>
                                        <p style={{fontSize: '1rem', fontWeight: '700', }}>view more</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: '40%', }}>
                                <Dealers />
                            </div>
                        </div>
                    </div>
                )) : <div>no data find.</div>
            }
        </div>
    )
}

export default CarLists