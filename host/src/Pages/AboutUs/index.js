import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { axiosImages } from '../../axios/axiosInstances'

const AboutUs = () => {
    const [image, setImage] = useState()

    useEffect(async ()=>{
    },[])

    return (
        <div style={{ height: '100%', width: '100%', background: 'gray', color: 'white', }}>
            <div>
                <img src={`${process.env.REACT_APP_API_URL}/images/IMAGE-1675755321520.png`} alt="" height="auto" width="100%" />
            </div>
            <h1>AboutUs</h1>
        </div>
    )
}

export default AboutUs