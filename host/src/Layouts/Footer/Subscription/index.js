import React, { useState } from 'react'

const Subscription = () => {
    const [email, setEmail] = useState('')

    const handleSubscribe = () => {
        console.log(email)
        setEmail( prev => prev = '')
    }

    return (
        <div style={{background: '#FCD271', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns:'1fr 4fr' ,width: '80vw', margin: '0 auto', }}>
                <img src="/logo.svg" alt="Best Price" style={{ height: '15rem', fill: 'white', }}/>
                <div style={{ width: '38rem', display: 'grid', gridTemplateRows: `repeat(4, 3rem)` }}>
                    <h3>stay with us</h3>
                    <p style={{ fontSize: '1rem', }}>We handpick the very best deals, trends and product news - making sure you never miss a thing.</p>
                    <div style={{}}>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email here' style={{ width: '25rem',padding: '.75rem 1rem', borderRadius: '10px', marginRight: '1rem', fontSize: '1rem', border: 'none', }} />
                        <button onClick={(e) => handleSubscribe()} disabled={!email} style={{ height: '2.65rem', padding: '0 1rem', fontSize: '1rem', borderRadius: '10px', background: '#FCD271', border: 'none', boxShadow: '0px 0px 3px gray',  }}>Subscribe</button>
                    </div>
                    <p style={{ fontSize: '.7rem', marginTop: '1rem', }}>Yes, I want to receive news and offers related to PriceRunner's product range, competitions and recommendations via email. I can withdraw my consent at any time. Read more in our Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}

export default Subscription
