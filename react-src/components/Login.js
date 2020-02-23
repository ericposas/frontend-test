import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { mapState, mapDispatch } from '../mapStateDispatch'

class Login extends Component {

  loginContainerInnerRef = React.createRef()

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
                  style={{ width: '100%' }}
                  label='username'
                  variant='outlined'
                />
              </div>
              <div className='padding-10'>
                <TextField
                  style={{ width: '100%' }}
                  label='password'
                  variant='outlined'
                />
              </div>
              <div className='padding-10' style={{ position: 'relative' }}>
                <Button
                  style={{ margin: 'auto', position: 'absolute', left: 0, right: 0 }}
                  variant='contained'
                  color='default'>
                  Submit
                </Button>
              </div>
              <div className='padding-10'></div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default connect(mapState, mapDispatch)(Login)
