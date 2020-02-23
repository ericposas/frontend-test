import constants from '../constants/constants'

const windowDimensions = (state = {}, action) => {
  switch(action.type) {
    case constants.WINDOW_RESIZE:
      return action.payload
      break
    default:
      return state
  }
}

export default windowDimensions
