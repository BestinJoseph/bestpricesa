import React, { useEffect } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import CustomInput from '../../HelperComponents/CustomInput'

const Header = () => {
    const location = useLocation()
    const inputs = ["make", "model", "Min", "Max", "discount", "submit"]
    const params = useParams()

    useEffect(() => {
        window.scrollTo(0,0)
    },[location.pathname])

    console.log(params)

    return (
        <React.Fragment>
            {
                location.pathname && location.pathname === '/' ? (
                    <div style={{ display: 'flex', margin: '0 auto', width: '80vw', height: '25rem', }}>
                        <div style={{width: '50%', display: 'flex', alignItems: 'center',  }}>
                            <div  style={{ border: '1px solid violet', borderRadius: '.75rem', padding: '2rem', width: '80%', }}>
                                <h2 style={{ paddingBottom: '1.5rem', color: 'violet', }}>Best Price</h2>
                                <h1 style={{ paddingBottom: '1.25rem'}}>Compare prices on 2.6 million products from 6 100 UK shops</h1>
                                <div style={{display: 'flex', }}>
                                    <input type="text" style={{width: '80%', padding: '.5rem', fontSize: '1.5rem', borderRadius: '5px', marginRight: '1rem', }}/>
                                    <h>Search</h>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '50%', }}>
                            <NavBar />
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                        <div style={{width: '80vw', margin: '0 auto', display: 'grid', gridTemplateRows: 'auto 3fr', }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                <h1><Link to="/" style={{color: 'violet', textDecorationLine: 'none', }}>BestPrice</Link></h1>
                                <NavBar />
                            </div>
                            <div style={{border: 'none', marginTop: '5rem', }}>
                                <div style={{marginBottom: '1rem', }}>
                                    <h3>Make and Type</h3>
                                </div>
                                <div style={{display: 'grid', gridTemplateColumns: `repeat(${inputs.length}, 1fr)` }}>
                                    {
                                        inputs.map((input, i) => (
                                            <CustomInput types={input} key={i} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Header
