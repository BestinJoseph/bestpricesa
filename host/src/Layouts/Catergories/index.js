import React from 'react'

const Catergories = () => {
    return (
        <div style={{height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 5px 20px #d1d8e3', }}>
            <ul style={{ listStyle: 'none', padding: 0, }}>
                <li style={{ border: '1px solid gray', width: '5rem', height: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', cursor: 'pointer', }}>
                    <p className={{}}>Cars</p>
                </li>
            </ul>
        </div>
    )
}

export default Catergories

