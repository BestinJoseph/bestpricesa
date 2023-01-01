import React from 'react'

const PropoularProducts = () => {
    const products = ["Product One", "Product Two", "Product Three", "Product Four", "Product Five", "Product Six", "Product Seven", ]
    return (
        <div style={{ width: '80vw', margin: '6rem auto 0 auto', }}>
            <div style={{ marginBottom: '2rem', }}>
                <h2>Popular Products</h2>
            </div>
            <div style={{display: 'flex', }}>
                {
                    products.map( (prod, i) => {
                        if ( i !== products.length - 1) {
                            return (
                                <div key={i} style={{ display: 'grid', gridTemplateRows: '.5fr 3fr 1fr', height: '15rem', width: '10rem', border: '1px solid yellow', borderRadius: '1rem', marginRight: '2rem', padding: '1rem', }}>
                                    <div>hellow</div>
                                    <div>well done</div>
                                    <div>
                                        <h4 style={{ marginBottom: '.75rem', color: 'gray', fontWeight: 400}}>{prod}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                            <h3>SAR 150</h3>
                                            <div>* 4.0</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} style={{ display: 'grid', gridTemplateRows: '.5fr 3fr 1fr', height: '15rem', width: '10rem', border: '1px solid yellow', borderRadius: '1rem', marginRight: '0rem', padding: '1rem', }}>
                                    <div>hellow</div>
                                    <div>well done</div>
                                    <div>
                                        <h4 style={{ marginBottom: '.75rem', color: 'gray', fontWeight: 400}}>{prod}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                            <h3>SAR 150</h3>
                                            <div>* 4.0</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default PropoularProducts