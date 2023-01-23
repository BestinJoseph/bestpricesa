import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { HiStar } from 'react-icons/hi'
import { VscAccount } from 'react-icons/vsc'

import LatestReviewStyles from './LatestReviewStyles'

const LatestReview = () => {
    const lReview = ["Moh'd Basha", "Ahmed Sagaf", "Omar Mansi", "Reda Mohammed", "Martin Joe"]
    const classes = LatestReviewStyles()

    return (
        <div style={{ background: '#F4F9F9', padding: '5rem 0', }}>
            <div style={{ width: '80vw', margin: '0 auto', }}>
                <h2 style={{paddingBottom: '2rem', }}>Latest Review</h2>
                <div style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: `repeat(${lReview.length}, auto)`, width: '100%', padding: '1rem', }}>
                    {
                        lReview.map( (lr, i) => (
                            <div key={i} style={{ marginRight: i !== lReview.length -1 ? '1rem' : '0rem' }} className={classes.lrItem} >
                                <div style={{ padding: '3rem 1rem', display: 'grid', gridTemplateRows: '1fr 1fr 1fr', textAlign: 'center', }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem', }}>
                                        <FcGoogle style={{fontSize: '3rem', marginBottom: '.5rem', }}/>
                                        <div style={{ display: 'flex', color: '#FCD271', fontSize: '1.5rem', }}>
                                            <HiStar />
                                            <HiStar />
                                            <HiStar />
                                            <HiStar />
                                            <HiStar />
                                        </div>
                                    </div>
                                    <p>I've really enjoyed using this... <span>Read more</span></p>
                                    <div style={{  }}>
                                        <VscAccount style={{ fontSize: '3rem', marginBottom: '.5rem', color: '#FCD271' }}/>
                                        <div>
                                            <h2>{lr}</h2>
                                            <p><span>@bashabestprice</span> - { Math.round(Math.random(1, 30) * 10)} days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestReview
