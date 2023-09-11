import {combineReducers} from 'redux'

import userReducer from './userReducer/user-reducer.js'

const rootReducer = combineReducers({userReducer})

export default rootReducer