import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import CarHomeStyles from './CarHomeStyles'
import CarOverview from './CarOverview'

const CarHome = () => {
    const location = useLocation()
    const classes = CarHomeStyles()
    const breadCrumbs = [{name: 'Home', link: '/'}, {name: 'Cars', link: '/cars'}, ]
    const dealers = ['dealer One', 'dealer two', 'dealer three']
    const specs = ["Overview","Features & Specs","History & Inspection","Warranty","Ratings & Reviews"]

    // console.log(location)

    return (
        <div className={classes.carHomeContainer} >
            <div className={classes.carHomeInnerSection} >
                <ul className={classes.carHomeBreadCrumb}>
                    {
                        breadCrumbs && breadCrumbs.map((bc, i) => (
                            <li key={i}><Link to={bc.link}>{bc.name}</Link></li>
                        ))
                    }
                    <li>Chevy Spark - Top vairent</li>
                </ul>
                <div  style={{display: 'flex', justifyContent: 'space-between', }}>
                    <div>
                        <div  style={{display: 'flex', alignItems: 'flex-end', marginBottom: '.75rem', }}>
                            <h1 style={{fontSize: '2.5rem', marginRight: '1rem', }}>Toyota Venza LE</h1>
                            <p style={{paddingBottom: '.25rem'}}>VE | LE | DE</p>
                        </div>
                        <p style={{ }}>Stock available: 150cars</p>
                    </div>
                    <div style={{display: 'flex', }}>
                        {
                            dealers.map((deal, i) => (
                                <div key={i} style={{ border: '1px solid blue', padding: '1rem', width: '4.5rem', marginRight: '1rem', borderRadius: '10px', }}>
                                    <p style={{marginBottom: '1rem',}}>Logo</p>
                                    <h4>{deal}</h4>
                                    <h6 style={{margin: '.5rem 0'}}>Riyadh</h6>
                                    <h4 style={{ color: 'blue', }}>1,00,500</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={classes.carHomeImages}>
                <div>nice</div>
                <div>love</div>
                <div>life</div>
                <div>hate</div>
                <div>done</div>
                <div>gone</div>
                <div>well</div>
            </div>
            <div className={classes.carHomeSpecification}>
                <ul style={{ display: 'flex', listStyle: 'none', padding: '0 0 2rem 0', width: '80%', margin: '0 auto', }}>
                    {
                        specs.map((spec, j)=>(
                            <div key={j} style={{ padding: '.5rem 3rem', cursor: 'pointer'}}>{spec}</div>
                        ))
                    }
                </ul>
            </div>
            <div>
                <CarOverview />
            </div>
        </div>
    )
}

export default CarHome
