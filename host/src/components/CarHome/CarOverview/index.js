import React from 'react'
import { Link } from 'react-router-dom'

import CarHomeStyles from './CarOverviewStyles'

const CarOverview = () => {
    const classes = CarHomeStyles()
    const feature = ["Satellite Radio Ready", "Bluetooth Technology", "Cloth Seats", "Auxiliary Audio Input", "Air Conditioning", "Alloy Wheels", "Cruise Control", "CD Audio", "Rear Defroster", "AM/FM Stereo"]
    const terms = ["No impact to your credit score", "Takes most customers less than 5 minutes","See your terms for this car and others"]

    return (
        <div>
            <div className={classes.carOverviewContainer}>
                <div style={{ }}>
                    <div style={{ marginBottom: '5rem', }}>
                        <h2>Overview</h2>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem', marginTop: '2rem', gridRowGap: '4rem', }}>
                            <div>
                                <h4>Logo</h4>
                                <h3>Some Info</h3>
                                <p>Lorem Ipsum has been the industry</p>
                            </div>
                            <div>
                                <h4>Sign</h4>
                                <h3>Welcome to</h3>
                                <p>Bluetooth Technology, Alloy Wheels, Cloth Seats, Cruise Control, Satellite Radio Ready</p>
                            </div>
                            <div>
                                <h4>Idea</h4>
                                <h3>How it Works</h3>
                                <p>standard dummy text ever since the 1500s</p>
                            </div>
                            <div>
                                <h3>21 city/27 hwy</h3>
                                <p>Miles per gallon</p>
                            </div>
                            <div>
                                <h3>4-cyl, Gas, 2.7L</h3>
                                <p>Engine</p>
                            </div>
                            <div>
                                <h3>Front Wheel Drive</h3>
                                <p>Drive type</p>
                            </div>
                            <div>
                                <h3>Automatic</h3>
                                <p>Transmission</p>
                            </div>
                            <div>
                                <h3>Front Wheel Drive</h3>
                                <p>Drive type</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Features & Specs</h1>
                        <div style={{margin: '2rem 0'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '.65fr 1fr', height: '12rem', background: '#004487', borderRadius: '.5rem', alignItems: 'center', color: 'white', }}>
                                <h1 style={{textAlign: 'center',}}>Level 2</h1>
                                <div>
                                    <h2 style={{ marginBottom: '.75rem', }}>The Basics</h2>
                                    <p style={{ marginBottom: '.35rem', }}>More potential savings with more basic features.</p>
                                    <p style={{cursor: 'pointer'}}>How to compare the spec with other?</p>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '2rem',  borderTop: '1px solid gray', paddingTop: '3rem', }}>
                                {
                                    feature.map((fea, i) => (
                                        <p style={{ marginBottom: '2rem', }} key={i}>{fea}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    nice
                </div>
            </div>
            <div style={{ background: '#fafafa', padding: '5rem 0'}}>
                <div style={{width: '80%', margin: '0 auto', }}>
                    <h2 style={{ marginBottom: '2rem', }}>Get personalized terms in minutes</h2>
                    <div style={{display: 'flex', }}>
                        {
                            terms.map((term, i) => (
                                <div style={{ background: 'white', borderRadius: '.5rem', padding: '2rem', width: '20rem', marginRight: '1rem', }} key={i}>
                                    <h1 style={{marginBottom: '1rem', }}>Logo {i}</h1>
                                    <p>{term}</p>
                                </div>
                            ))
                        }
                    </div>
                    <h3 style={{ marginTop: '2rem', background: '#053361', padding: '.75rem 1.5rem', borderRadius: '.25rem', display: 'inline-block', color: 'white', cursor: 'pointer' }}>Add to wishlist</h3>
                </div>
            </div>
            <div style={{ width: '80%', margin: '5rem auto', }}>
                <div style={{ marginBottom: '2rem', }}>
                    <h5 style={{marginBottom: '.75rem', }}>Warranty</h5>
                    <h2>We got you back</h2>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '2rem', }}>
                    <div>
                        <h4>Included with this car</h4>
                        <ul style={{listStyle: 'none', padding: '0rem', borderRadius: '10px', background: '#fafafa', display: 'inline-block', border: '.5px solid #ededed', }}>
                            <li style={{ padding: '.75rem 1.5rem', borderBottom: '.5px solid #ededed', }}><p>1960s with the release of Letraset sheets containing</p></li>
                            <li style={{ padding: '.75rem 1.5rem', borderBottom: '.5px solid #ededed', }}><p>Lorem Ipsum passages, and more recently with desktop</p></li>
                            <li style={{ padding: '.75rem 1.5rem', }}><p>Standard dummy text ever since the 1500s, unknown</p></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Optional MaxCare® protection</h4>
                        <div>
                            <div>Logo</div>
                            <div>
                                <h4>MedGulf</h4>
                                <p>Coverage up to 150,000 odometer miles or 36 months. Deductibles start at $50 per visit</p>
                                <h5>See your benefits</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarOverview