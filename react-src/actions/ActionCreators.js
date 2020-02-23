import constants from '../constants/constants'
import axios from 'axios'

const actions = {

  onWindowResize: (dimensions) => ({ type: constants.WINDOW_RESIZE, payload: dimensions }),
  registerUser: ({
    firstName, lastName, email,
    password, birthdate, phone,
    country, zip
  }) => {
    return (dispatch, getState) => {
      axios.post('/register', { firstName, lastName, email, password, birthdate, phone, country, zip })
        .then(data => {
          if (data.data.success) {
            console.log(data.data.success)
            dispatch({ type: constants.USER_REGISTERED })
          }
        })
        .catch(err => console.log(err))
    }
  },
  handleLogin: ({ email, password }) => {
    return (dispatch, getState) => {
      axios.post('/login', { email, password })
        .then(data => {
          if (data.data.success) {
            console.log(data.data.success)
            dispatch({ type: constants.USER_LOGGED_IN })
          }
        })
    }
  }

}

export default actions
