import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'


import rootReducer from './root-reducer.js'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store