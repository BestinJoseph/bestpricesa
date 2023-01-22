import Cars from '../assets/data/Cars.json'


export const getAllCars = () => async (dispatch) => {
    const cars = await Cars.cars
    dispatch({type: 'GET_ALL_CARS', payload: cars})
}

export const getFilterCars = (search) => async (dispatch) => {
    const cars = Cars.cars
    let filteredCars = []

    if( search.make !== '' ) {
        filteredCars = cars.filter( (car) => car.make === search.make)
        dispatch({type: 'GET_FILTERED_CARS', payload: filteredCars})
    } else {
        console.log('wel done.')
        dispatch({type: 'GET_ALL_CARS', payload: cars})
    }
}