import React from 'react'

import riyadh from '../../../assets/images/riyadh.png'
import location from '../../../assets/images/location.png'

export const Dealers = () => {
    const dealers = ["Dealer One", "Dealer Two", "Dealer Three", "Dealer Four", "Dealer Five", "Dealer six"]
    return (
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${dealers.length}, 1fr)`, overflow: 'hidden', height: '100%'}}>
            {
                dealers.map( (deal, i) => (
                    <div style={{ width: '5rem', padding: '.75rem', border: '1px solid gray', marginRight: '.1rem', }} key={i}>
                        <div style={{ paddingBottom: '1rem', }}>
                            <p style={{ fontSize: '.75rem', color: 'gray', }}>SAR</p>
                            <h3>{Math.floor(Math.random(5, 12) * 1000000)}</h3>
                        </div>
                        <img src={riyadh} width="80px" alt='logo' />
                        <div style={{ marginTop: '.5rem', textAlign: 'center'}}>
                            <p style={{fontSize: '.75rem', }}>In Stock</p>
                            <h3>{ Math.floor(Math.random() * 100 ) + 4}</h3>
                        </div>
                        <div style={{marginTop: '1rem', width: '100%' }}>
                            <img src={location} alt="location" width="40px" style={{textAlign: 'center', marginBottom: '.75rem', }}/>
                            <div style={{ display: 'flex', alignItems:'flex-end', }}>
                                <p style={{fontSize: '.5rem', }}>from you</p>
                                <h4>{Math.round(Math.random() * 1000) / 10}km</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
