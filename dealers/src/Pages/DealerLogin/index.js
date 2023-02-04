import React from 'react'

const DealerLogin = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <h1>BestPrice Dealers</h1>
                <div style={{ marginTop: '1rem', width: '21rem',}}>
                    <input type="text" placeholder='Username' style={{ display: 'block', marginBottom: '1rem', padding: '.5rem', fontSize: '1.05rem', width: '19.75rem' }}/>
                    <input type="password" placeholder='Password' style={{ display: 'block', marginBottom: '1rem', padding: '.5rem', fontSize: '1.05rem', width: '19.75rem' }} />
                    <button style={{ padding: '.5rem 1rem', background: 'orange', border: 'none', }}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default DealerLogin