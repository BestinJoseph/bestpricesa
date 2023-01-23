import React from 'react'

import WinterSaleStyles from './WinterSaleStyles'

const WinterSale = () => {
    const classes = WinterSaleStyles()
    return (
        <div className={classes.winterContainer} style={{ backgroundImage: `url('/assets/winter.webp')` }}>
            <div style={{ padding: '1rem', width: '60%', textAlign: 'center', }}>
                <h1 style={{ marginBottom: '.5rem', backgroundColor: 'rgba(0, 0, 0, .7)', display: 'inline-block', padding: '0.25rem 2rem', color: 'yellow', }}>Winter Sale</h1>
                <p style={{ lineHeight: '1.5rem', backgroundColor: 'rgba(255, 255, 0, .25)', display: 'inline-block', padding: '0.25rem 2rem', color: 'black', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    )
}

export default WinterSale
