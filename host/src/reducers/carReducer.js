const initialState = {
    cars: [],
    car: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CARS':
            return { ...state, cars: action.payload, car: {} }
        case 'GET_FILTERED_CARS':
            return { ...state, cars: action.payload, car: {} }
        case 'GET_SINGLE_CAR':
            return { ...state, cars: [], car: action.payload.car }
        default:
            return state
    }
}