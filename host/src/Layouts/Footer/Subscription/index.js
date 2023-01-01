import React from 'react'

const Subscription = () => {
    return (
        <div style={{background: '#FFFAD7'}}>
            <div style={{ display: 'flex',  height: '16rem', alignItems: 'center', width: '80vw', margin: '0 auto', }}>
                <h1 style={{fontSize: '14rem', width: '22rem', }}>SB</h1>
                <div style={{ width: '38rem', display: 'grid', gridTemplateRows: `repeat(4, 3rem)` }}>
                    <h3>Subscription to our newletter</h3>
                    <p style={{ fontSize: '1rem', }}>We handpick the very best deals, trends and product news - making sure you never miss a thing.</p>
                    <div style={{display: 'flex', }}>
                        <input type="text" placeholder='Your email here' />
                        <button >Subscribe</button>
                    </div>
                    <p style={{ fontSize: '.7rem', marginTop: '1rem', }}>Yes, I want to receive news and offers related to PriceRunner's product range, competitions and recommendations via email. I can withdraw my consent at any time. Read more in our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Subscription