import constants from '../constants/constants'

const userState = (state = null, action) => {
  switch(action.type) {
    case constants.USER_LOGGED_IN:
      return constants.USER_LOGGED_IN
      break
    case constants.USER_REGISTERED:
      return constants.USER_REGISTERED
      break
    case constants.USER_LOGGED_OUT:
      return constants.USER_LOGGED_OUT
      break
    default:
      return state
  }
}

export default userState
