import constants from '../constants/constants'
import axios from 'axios'

const actions = {

  onWindowResize: (dimensions) => ({ type: constants.WINDOW_RESIZE, payload: dimensions }),
  registerUser: ({
    firstName, lastName, email,
    password, birthdate, phone,
    country, zip
  }) => {
    return (getState, dispatch) => {
      axios.post('/register', { firstName, lastName, email, password, birthdate, phone, country, zip })
        .then(data => {
          console.log(data.data)
          if (data.data.success) {
            // dispatch({  })
          }
        })
        .catch(err => console.log(err))
    }
  },
  handleLogin: ({ email, password }) => {
    return (getState, dispatch) => {
      axios.post('/login', { email, password })
        .then(data => {
          console.log(data.data)
          if (data.data.success) {
            // ...
          }
        })
    }
  }

}

export default actions
