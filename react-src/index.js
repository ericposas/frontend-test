import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'react-toastify/dist/ReactToastify.css'
import rootReducer from './reducers/rootReducer'
import App from './components/App'
import './register.scss'
import './login.scss'
// import all images/graphics
const requireImage = require.context('./graphics', false, /.(svg|jpg|png)$/)
requireImage.keys().forEach(image => {
  requireImage(image)
})

const rootElement = document.getElementById('root')
const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
