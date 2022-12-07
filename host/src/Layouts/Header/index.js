import React from 'react'

import NavBar from '../../components/NavBar'

// import car from '../../assets/images/slider.jpg'

const Header = () => {
  return (
    <div style={{ zIndex: '3', width: '90%', margin: 'auto', }}>
        <div style={{display: 'flex', justifyContent: 'space-between', }}>
            <div>Logo</div>
            <div>
                <NavBar />
            </div>
        </div>
        <img src="" height="10rem" width="50rem" alt="nice buddy" />
    </div>
  )
}

export default Header
