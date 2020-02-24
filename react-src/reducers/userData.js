import constants from '../constants/constants'

const userData = (state = null, action) => {
  switch(action.type) {
    case constants.SET_USER_DATA:
      return action.payload
      break
    default:
      return state
  }
}

export default userData
