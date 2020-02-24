import constants from '../constants/constants'

const productsDataFile = (state = [], action) => {
  switch(action.type) {
    case constants.PRODUCTS_DATA_FILE_LOADED:
      return action.payload
      break
    default:
      return state
  }
}

export default productsDataFile
