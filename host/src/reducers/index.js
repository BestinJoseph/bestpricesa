import { combineReducers } from "redux"

import users from './authReducer'
import cars from './carReducer'

export default combineReducers({users, cars})