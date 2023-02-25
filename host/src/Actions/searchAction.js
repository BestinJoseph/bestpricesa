import axios from 'axios'
// import Cars from '../assets/data/Cars.json'
// import dotenv from 'dotenv'

const apiUrl = process.env.REACT_APP_API_URL

export const getAllCars = () => async (dispatch) => {
    try {
        const cars = await axios.get(`${apiUrl}/cars`)
        dispatch({type: 'GET_ALL_CARS', payload: cars})
    } catch (err) {
        dispatch({type: 'ERROR_TRUE', payload: err})
    }
    // const cars = await Cars.cars
}

export const getFilterCars = (search) => async (dispatch) => {
    const { data } = await axios.get(`${apiUrl}/cars`)
    const cars = data.data.cars

    let filteredCars = []

    if (data.errors === null ) {
        filteredCars = cars.filter( (car) => {
            return Object.keys(search).every( key => {
                switch (key) {
                    case 'make':
                        if(search[key] !== '') {
                            return car[key].toLowerCase().includes(search[key]) ? car : null
                        } else {
                            return car
                        }
                    case 'model':
                        if(search[key] !== '') {
                            return car[key].toLowerCase().includes(search[key]) ? car : null
                        } else {
                            return filteredCars
                        }
                    case 'min':
                        if(search[key] !== '') {
                            return car.price >= parseInt(search[key]) ? car : null
                        } else {
                            return filteredCars
                        }
                    case 'max':
                        if(search[key] !== '') {
                            return car.price <= parseInt(search[key]) ? car : null
                        } else {
                            return filteredCars
                        }
                    default:
                        return cars
                }
            } )
        })
    } else {
        filteredCars = cars
    }

    console.log(filteredCars)

    dispatch({type: 'GET_FILTERED_CARS', payload: filteredCars})
}

export const getSingleCar = (id) => async (dispatch) => {
    const car = Cars.cars.find( aCar => aCar._id === id )
    dispatch({type: 'GET_SINGLE_CAR', payload: { car }})
}