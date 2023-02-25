import React from 'react'
import { useNavigate } from 'react-router-dom'

import { dealer001, dealer002, dealer003, dealer004, dealer005, dealer006, dealer007 } from '../../../assets'
import DealersStyles from './DealersStyles'
import { BsFillPinMapFill } from 'react-icons/bs'

export const Dealers = () => {
    const dealers = [dealer001, dealer002, dealer003, dealer004, dealer005, dealer006, dealer007]
    const classes = DealersStyles()
    const navigate = useNavigate()

    const handleDealer = (deal) => {
        console.log('nice.')
        navigate('/dealers/' + deal)
    }

    return (
        <div className={classes.dealerContainer}>
            {
                dealers.map( (deal, i) => (
                    <div className={classes.dealerItem} key={i} onClick={() => handleDealer(i)}>
                        <div style={{ paddingBottom: '1rem', }}>
                            <p style={{ fontSize: '.75rem', color: 'gray', }}>SAR</p>
                            <h3>{ Math.floor(Math.random() * 999999 ) + 100000 }</h3>
                        </div>
                        <div className={classes.imageContainer}>
                            <img src={deal} width="80px" alt='dealer logo' />
                            {/* <div>{ Math.floor(Math.random() * 7 ) + 1 }</div> */}
                        </div>
                        <div style={{ marginTop: '.5rem', textAlign: 'center'}}>
                            <p style={{fontSize: '.75rem', }}>In Stock</p>
                            <h3>{ Math.floor(Math.random() * 100 ) + 4}</h3>
                        </div>
                        
                        <div style={{marginTop: '1rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center',  }}>
                            <BsFillPinMapFill style={{ fontSize: '2rem', marginBottom: '.75rem', display: 'flex', justifyContent:'flex-end', color: 'green', }} />
                            {/* <img src={location} alt="location" width="40px" style={{textAlign: 'center', marginBottom: '.75rem', }}/> */}
                            <div style={{ textAlign: 'center' }}>
                                <p style={{fontSize: '.75rem', }}>from you</p>
                                <h4 style={{color: 'blue', }}>{Math.round(Math.random() * 1000) / 10}km</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
