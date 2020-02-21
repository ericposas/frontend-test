import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import monthDays from 'month-days'
import axios from 'axios'

class Registration extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    selectedMonth: 1,
    selectedDay: null,
    selectedYear: null,

  }

  handleChange = type => e => {
    this.setState({
      [type]: e.target.value
    })
  }

  render() {
    return (
      <>
        <div className='banner-my-company'>
          <img src='./img/logo-desktop.svg' width={182}/>
        </div>
        <div className='banner-register'>REGISTER</div>
        <div className='center-content'>
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
              <div className='birthdate-selector-container'>
                <div className='birthdate-month-selector-container'>
                  <div className='fake-dropdown-button-month'>
                    <div className='fake-dropdown-button-text'>Month</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-month-selector'
                    onChange={this.handleChange('selectedMonth')}>
                    {
                      Array(12).fill(12).map((option, i) => <option key={`month-${i}`} value={i}>{i+1}</option>)
                    }
                  </select>
                </div>
                <div className='birthdate-day-selector-container'>
                  <div className='fake-dropdown-button-day'>
                    <div className='fake-dropdown-button-text'>Day</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-day-selector'
                    onChange={this.handleChange('selectedDay')}>
                    {
                      Array(monthDays({ month: parseInt(this.state.selectedMonth), year: 2020 }) || 0)
                        .fill(monthDays({ month: parseInt(this.state.selectedMonth), year: 2020 }) || 0)
                        .map((option, i) => <option key={`day-${i}`} value={option-i}>{option-i}</option>)
                        .reverse()
                    }
                  </select>
                </div>
                <div className='birthdate-year-selector-container'>
                  <div className='fake-dropdown-button-year'>
                    <div className='fake-dropdown-button-text'>Year</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-year-selector'
                    onChange={this.handleChange('selectedYear')}>
                    {
                      Array(121)
                        .fill(1900)
                        .map((year, i) => <option key={`year-${i}`} value={year + i}>{year + i}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
          </div>


        </div>
      </>
    )
  }

}

export default Registration
