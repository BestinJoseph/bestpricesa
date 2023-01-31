import { combineReducers } from "redux"

import users from './authReducer'
import cars from './carReducer'
import errors from './errorReducer'
import categories from './categoryReducer'

export default combineReducers({users, cars, errors, categories})