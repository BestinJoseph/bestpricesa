import { combineReducers } from "redux"

import users from './authReducer'
import cars from './carReducer'
import errors from './errorReducer'

export default combineReducers({users, cars, errors})