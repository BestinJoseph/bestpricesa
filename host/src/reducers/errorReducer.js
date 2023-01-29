const initialState = {
    errors: "",
    success: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ERROR_TRUE":
            return { ...state, errors: action.payload, success: false }
        case "ERROR_FALSE":
            console.log(action)
            return { ...state, errors: "", success: true }
        default:
            return initialState
    }
}