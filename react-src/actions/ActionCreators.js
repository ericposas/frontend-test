import constants from '../constants/constants'
import axios from 'axios'

const actions = {
  onWindowResize: (dimensions) => ({ type: constants.WINDOW_RESIZE, payload: dimensions }),
  logout: (callback) => {
    return (dispatch, getState) => {
      axios.post('/logout')
        .then(data => {
          if (data.data.success) {
            dispatch({ type: constants.USER_LOGGED_OUT })
            dispatch({ type: constants.SET_USER_DATA, payload: null })
            if (callback) callback()
          } else {
            console.log(data.data.error)
          }
        })
    }
  },
  checkSession: (callback) => {
    return (dispatch, getState) => {
      dispatch({ type: constants.LOADING_DATA_FILE })
      axios.post('/sessionCheck')
        .then(data => {
          dispatch({ type: constants.LOADING_DATA_FILE_FINISHED })
          if (data.data.success) {
            dispatch({ type: constants.USER_LOGGED_IN })
            dispatch({ type: constants.SET_USER_DATA, payload: data.data.success })
            if (callback) callback()
          } else {
            console.log(data.data.error)
          }
        })

    }
  },
  getProductList: () => {
    return (dispatch, getState) => {
      axios.get('./json/data.json')
        .then(data => {
          if (data.data) {
            dispatch({ type: constants.PRODUCTS_DATA_FILE_LOADED, payload: data.data })
          } else {
            console.log('error loading json file')
          }
        })
        .catch(err => console.log(err))
    }
  },
  registerUser: ({
    firstName, lastName, email,
    password, birthdate, phone,
    country, zip
  }) => {
    return (dispatch, getState) => {
      axios.post('/register', { firstName, lastName, email, password, birthdate, phone, country, zip })
        .then(data => {
          if (data.data.success) {
            let user = data.data.success
            dispatch({ type: constants.USER_REGISTERED })
          } else {
            console.log(data.data.error)
          }
        })
        .catch(err => console.log(err))
    }
  },
  handleLogin: ({ email, password }, callback) => {
    return (dispatch, getState) => {
      axios.post('/login', { email, password })
        .then(data => {
          if (data.data.success) {
            let user = data.data.success
            dispatch({ type: constants.USER_LOGGED_IN })
            dispatch({ type: constants.SET_USER_DATA, payload: user })
            if (callback) callback()
          } else {
            console.log(data.data.error)
          }
        })
    }
  }

}

export default actions
