import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { mapState, mapDispatch } from '../mapStateDispatch'

class Login extends Component {

  state = {
    emailValue: '',
    passwordValue: ''
  }

  loginContainerInnerRef = React.createRef()

  componentDidMount() {
    this.props.onWindowResize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
  }

  handleLoginSubmit = () => {
    this.props.handleLogin({
      email: this.state.emailValue,
      password: this.state.passwordValue
    })
  }

  render() {
    return (
      <>
        <div
          className='login-container-outer'
          style={{
            paddingTop: (
              this.loginContainerInnerRef.current
              ? this.props.windowDimensions.innerHeight/2 - (parseInt(getComputedStyle(this.loginContainerInnerRef.current).getPropertyValue('height'))/2)
              : 0
            )
          }}
          >
          <div ref={this.loginContainerInnerRef} className='login-container-inner'>
            <div
              className='padding-30'
              style={{ margin: 'auto', width: '70%' }}
            >
              <div className='padding-10'>
                <TextField
                  onChange={e => this.setState({ emailValue: e.target.value })}
                  value={this.state.emailValue}
                  style={{ width: '100%' }}
                  label='email'
                  variant='outlined'
                />
              </div>
              <div className='padding-10'>
                <TextField
                  onChange={e => this.setState({ passwordValue: e.target.value })}
                  type='password'
                  value={this.state.passwordValue}
                  style={{ width: '100%' }}
                  label='password'
                  variant='outlined'
                />
              </div>
              <div className='padding-10' style={{ position: 'relative' }}>
                <Button
                  onClick={this.handleLoginSubmit}
                  style={{ margin: 'auto', position: 'absolute', left: 0, right: 0 }}
                  variant='contained'
                  color='default'>
                  Submit
                </Button>
              </div>
              <div className='padding-5'></div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default connect(mapState, mapDispatch)(Login)
