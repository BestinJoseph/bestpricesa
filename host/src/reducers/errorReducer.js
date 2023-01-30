const initialState = {
    errors: "",
    success: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ERROR_TRUE":
            return { ...state, errors: action.payload, success: false }
        case "ERROR_FALSE":
            const st = { ...state, ...initialState}
            console.log(st)
            return { ...state, ...initialState}
        default:
            return initialState
    }
}
