import {combineReducers} from 'redux'

import counterReducer from './counterReducer'

import userReducer from './usersReducer'

export default combineReducers({
    counterReducer,
    userReducer
})

