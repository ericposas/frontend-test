import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../mapStateDispatch'
import Registration from './Registration'
import Login from './Login'
import Home from './Home'
// import ProductPage from './ProductPage'
import axios from 'axios'

class App extends Component {

  handleWindowResize = () => {
    this.props.onWindowResize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render() {
    return (
      <>
        <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Registration}/>
              {/*<Route path='/products' component={ProductPage}/>*/}

            </Switch>
        </Router>
      </>
    )
  }

}

export default connect(mapState, mapDispatch)(App)
