import { combineReducers } from 'redux'
import windowDimensions from './windowDimensions'
import userState from './userState'

const rootReducer = combineReducers({
  windowDimensions,
  userState
})

export default rootReducer
