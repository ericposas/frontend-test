import { combineReducers } from 'redux'
import windowDimensions from './windowDimensions'
import userState from './userState'
import userData from './userData'
import productsDataFile from './productsDataFile'
import loadingDataFile from './loadingDataFile'

const rootReducer = combineReducers({
  windowDimensions,
  userState,
  userData,
  productsDataFile,
  loadingDataFile,
})

export default rootReducer
