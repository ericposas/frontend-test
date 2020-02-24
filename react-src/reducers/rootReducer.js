import { combineReducers } from 'redux'
import windowDimensions from './windowDimensions'
import userState from './userState'
import userData from './userData'

const rootReducer = combineReducers({
  windowDimensions,
  userState,
  userData,
})

export default rootReducer
