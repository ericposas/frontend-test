import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import axios from 'axios'

class Registration extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  handleChange = type => e => {
    this.setState({
      [type]: e.target.value
    })
  }

  render() {
    return (
      <>
        <div className='banner-my-company'></div>
        <div className='banner-register'>REGISTER</div>
        <div>
          Enter your information below for exclusive offers, promotions and savings.
        </div>
        <div className='form-block'>
          <div><sup>*</sup> Fields required</div>
          <div>
            <label>First Name <sup>*</sup></label>
            <div>
              <input type='text' value={this.state.firstName} onChange={this.handleChange('firstName')}/>
            </div>
          </div>
          <div>
            <label>Last Name</label>
            <div>
              <input type='text' value={this.state.lastName} onChange={this.handleChange('lastName')}/>
            </div>
          </div>
          <div>
            <label>Email Address <sup>*</sup></label>
            <div>
              <input type='text' value={this.state.email} onChange={this.handleChange('email')}/>
            </div>
          </div>
          <div>
            <label>Choose Password <sup>*</sup></label>
            <div>
              <input type='text' value={this.state.password} onChange={this.handleChange('password')}/>
            </div>
          </div>
          <div>
            <label>Confirm Password <sup>*</sup></label>
            <div>
              <input type='text' value={this.state.passwordConfirm} onChange={this.handleChange('passwordConfirm')}/>
            </div>
          </div>
          <div>
            <label>Birthdate <sup>*</sup></label>
            <div>
              <select>
                <option></option>
              </select>
            </div>
          </div>


        </div>
      </>
    )
  }

}

export default Registration
