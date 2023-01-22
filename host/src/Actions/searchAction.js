import Cars from '../assets/data/Cars.json'


export const getAllCars = () => async (dispatch) => {
    const cars = await Cars.cars
    dispatch({type: 'GET_ALL_CARS', payload: cars})
}

export const getFilterCars = (search) => async (dispatch) => {
    const cars = Cars.cars
    let filteredCars = []

    filteredCars = cars.filter( (car) => {
        return Object.keys(search).every( key => {
            switch (key) {
                case 'make':
                    if(search[key] !== '') {
                        return car[key].toLowerCase().includes(search[key]) ? car : null
                    } else {
                        return cars
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
                    return car
            }
        } )
    })

    dispatch({type: 'GET_FILTERED_CARS', payload: filteredCars})
}