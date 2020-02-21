import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'

class App extends Component {

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' component={Login}/>
            </Switch>
        </Router>
      </>
    )
  }

}

export default App
