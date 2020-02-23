import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Registration from './Registration'
import axios from 'axios'

class App extends Component {

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' component={Registration}/>
            </Switch>
        </Router>
      </>
    )
  }

}

export default App
