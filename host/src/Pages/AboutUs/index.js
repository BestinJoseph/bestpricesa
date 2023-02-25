import axios from 'axios'
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Buffer } from 'buffer'

const AboutUs = () => {
    const [images, setImages] = useState({})
    useEffect(() => {
        axios.get('/api/images/IMAGE-1675755321520.png', { responseType: 'arraybuffer' }).then( response => {
            if(response) {
                const blob = new Blob(
                    [response.data], 
                    { type: response.headers['content-type'] }
                  )
                  let image = URL.createObjectURL(blob)
                setImages(image)
            } 
        }).catch( err => console.log(new Error(err)))
        // console.log(images)
    },[])

    console.log(images)

    return (
        <div style={{ height: '40rem', width: '100%', background: 'gray', color: 'white', overflow: 'hidden', position: 'relative' }}>
            <img src={images} height="auto" width="100%" />
            <div style={{position: 'absolute', top: 0, left: '1rem', zIndex: 2}}>
                <h1>About page</h1>
            </div>
=======

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
>>>>>>> 4704d09a4afd4885fb0fe3c6643ee65c4f658fe1
        </div>
    )
}

export default AboutUs
