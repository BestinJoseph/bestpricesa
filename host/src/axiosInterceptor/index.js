import axios from 'axios'

const config = {

}

const token = ''

axios.interceptors.request.use( function (config) {
    if(!token) {
        // const { data } = await axios('/auth')
        console.log('data...')
    }

    config.headers.Authorization = `Bearer ${token}`
    return config;
}, (err) => {
    return Promise.reject(err)
})