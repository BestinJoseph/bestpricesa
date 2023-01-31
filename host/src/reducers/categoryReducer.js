const initialState = {
    category: null,
    items: null,
    id: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return { ...state, category: action.payload.category, items: null, id: null }
        case "SET_SUB_CATEGORIES":
            return { ...state, category: action.payload.category, items: action.payload.items, id: action.payload.id}
        case "REMOVE_CATEGORIES":
            return initialState
        default:
            return state
    }
}