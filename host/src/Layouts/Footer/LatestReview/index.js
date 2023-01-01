import React from 'react'

const LatestReview = () => {
    const lReview = ["One", "two", "three", "four", "five"]

    return (
        <div style={{ background: '#F4F9F9', padding: '3rem 0 5rem 0', }}>
            <div style={{ width: '80vw', margin: '0 auto', }}>
                <h2 style={{paddingBottom: '2rem', }}>Latest Review</h2>
                <div style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: `repeat(${lReview.length}, auto)`, width: '100%', }}>
                    {
                        lReview.map( (lr, i) => (
                            <div key={i} style={{ width: '25rem', borderRadius: '15px', boxShadow: '0 2px 5px #D6E4E5', background: 'white', marginRight: i !== lReview.length -1 ? '1rem' : '0rem' }}>
                                <div style={{ padding: '1rem', display: 'grid', gridTemplateRows: '1fr 1fr 1fr', }}>
                                    <div style={{display: 'flex', }}>
                                        <div style={{ fontSize: '2rem', marginRight: '1rem', }}>{`:-)`}</div>
                                        <div>
                                            <h5>Moh'd Basha</h5>
                                            <div style={{display: 'flex', }}><div style={{marginRight: '1rem', }}>* * * * *</div><p>3 days ago</p></div>
                                        </div>
                                    </div>
                                    <p>I've really enjoyed using this... <span>Read more</span></p>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #EEEEEE', padding: '.75rem .75rem', borderRadius: '7px', marginTop: '2px', }}>
                                        <div><div style={{fontSize: '1.75rem', }}>IM</div></div>
                                        <div style={{fontSize: '1.25rem', }}>{`>`}</div>
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
