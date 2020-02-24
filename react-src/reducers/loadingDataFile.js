import constants from '../constants/constants'

const loadingDataFile = (state = false, action) => {
  switch(action.type) {
    case constants.LOADING_DATA_FILE:
      return true
      break
    case constants.LOADING_DATA_FILE_FINISHED:
      return false
      break
    default:
      return state
  }
}

export default loadingDataFile
