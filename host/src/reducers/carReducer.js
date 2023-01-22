const initialState = {
    cars: [],
    car: {}
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case 'GET_ALL_CARS':
            return { ...state, cars: actions.payload}
        case 'GET_FILTERED_CARS':
            return { ...state, cars: actions.payload}
        default:
            return state
    }
}