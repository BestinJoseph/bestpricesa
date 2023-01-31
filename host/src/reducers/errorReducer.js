const initialState = {
    errors: null,
    failure: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ERROR_TRUE":
            console.log(action.type)
            return { ...state, errors: action.payload, failure: true }
        case "ERROR_FALSE":
            console.log(action.type)
            return { ...state, errors: null, failure: false}
        default:
            return initialState
    }
}
