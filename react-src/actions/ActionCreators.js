import constants from '../constants/constants'

const actions = {

  onWindowResize: (dimensions) => ({ type: constants.WINDOW_RESIZE, payload: dimensions }),


}

export default actions
