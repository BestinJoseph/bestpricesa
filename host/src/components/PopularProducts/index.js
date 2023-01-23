import React, { useEffect, useState } from 'react'

import PopularProductsStyles from './PopularProductsStyles'
import Cars from '../../assets/data/Cars.json'

const PropoularProducts = () => {
    const classes = PopularProductsStyles()
    const products = ["Product One", "Product Two", "Product Three", "Product Four", "Product Five", "Product Six", "Product Seven", ]
    const populars = Cars.populars
    
    useEffect(()=>{
        
    },[populars])
    
    // console.log(populars)

    return (
        <div style={{ width: '80vw', margin: '6rem auto 0 auto', }}>
            <div style={{ marginBottom: '2rem', }}>
                <h2>Popular Products</h2>
            </div>
            <div className={classes.popularItemContainer}>
                {
                    populars && populars.map( (popular, i) => (
                        <div key={i} className={classes.popularItem} style={{ backgroundImage: `url('/cars/${popular.image}')`, color: 'white', }}>
                            {/* <img src={`/cars/${popular.image}`} height="auto" alt="well" style={{ poistion: 'absolute', top: 0, left: 0, zIndex: '-2rem', }}/> */}
                            <div>hellow</div>
                            <div>well done</div>
                            <div>
                                <p style={{ color: 'black', fontWeight: 400, fontSize: '.75rem', background: 'yellow', display: 'inline-block', padding: '.15rem .25rem', }}>{ popular.make}</p>
                                <h2 style={{ marginBottom: '.75rem', fontWeight: 700, color: 'white', }}>{popular.model}</h2>
                                <div >
                                    <h6>dealername here</h6>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', }}>
                                        <h3 >{ popular.price }<span style={{ fontSize: '.5rem', }}>SAR</span></h3>
                                        <div>* 4.0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PropoularProducts
