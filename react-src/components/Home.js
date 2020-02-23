import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'

class Home extends Component {

  render() {
    const { history } = this.props
    return (
      <>
        <Button variant='contained' onClick={() => history.push('/register')}>Registration</Button>
        <Button variant='contained' onClick={() => history.push('/login')}>Login</Button>
        <Button variant='contained' onClick={() => history.push('/products')}>Product Page</Button>
      </>
    )
  }

}

export default Home
