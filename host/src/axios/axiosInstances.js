import axios from "axios"
import { Buffer } from 'buffer'

const baseUrl = "http://localhost:8000"

export const axiosImages = (image) => axios.get(`${baseUrl}/images/${image}`, {responseType: 'arraybuffer'})
    .then( responses=> {
        if(responses) {
            return `data:image/jpeg;base64, ${Buffer.from(responses.data, 'binary').toString('base64')}`
        }
    })
    .catch( err => console.log(err))