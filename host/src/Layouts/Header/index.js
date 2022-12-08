import React from 'react'

import NavBar from '../../components/NavBar'
import Catergories from '../Catergories'

// import car from '../../assets/images/slider.jpg'

const Header = () => {
  return (
    <div style={{ margin: 'auto', position: 'relative', background: '#FF884B',  }}> {/* borderBottom: '1px solid blue', */}
        <div style={{ zIndex: '3', width: '90%', margin: 'auto', height: '18rem', }}>
            <div style={{display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <div style={{display: 'flex', alignItems: 'center', color: 'white',  }}>
                    <h2>Best Price. Sa</h2>
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
        </div>
        {/* <img src="" height="10rem" width="50rem" alt="nice buddy" style={{ position: 'absolute', top: 0,  }} /> */}
    </div>
  )
}

export default Header
