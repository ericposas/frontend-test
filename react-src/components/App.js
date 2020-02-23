import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Home from './Home'
// import ProductPage from './ProductPage'
// import { Button } from '@material-ui/core'
import axios from 'axios'

class App extends Component {

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              {/*<Route path='/register' component={Registration}/>*/}
              {/*<Route path='/products' component={ProductPage}/>*/}

            </Switch>
        </Router>
      </>
    )
  }

}

export default App
