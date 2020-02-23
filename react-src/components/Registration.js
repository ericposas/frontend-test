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
    selectedMonth: 0,
    selectedDay: null,
    selectedYear: null,
    phoneNumber: '',
    zipCode: '',

  }

  handleChange = type => e => {
    this.setState({
      [type]: e.target.value
    })
  }

  handleRadioCountrySelect = country => e => {

  }

  render() {
    return (
      <>
        <div className='banner-my-company'>
          <img src='./img/logo-desktop.svg' width={182}/>
        </div>
        <div
          className='banner-register'
          style={{ backgroundImage: 'url(./img/gradient-strip.jpg)' }}
          >REGISTER</div>
        <div className='enter-your-information-text'>
          Enter your information below for exclusive offers, promotions<br/> and savings.
        </div>
        <div className='center-content'>
          <div className='form-block'>
            <div><sup>*</sup> Fields required</div>
            <div className='first-name-field-container field-container'>
              <label>First Name <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.firstName} onChange={this.handleChange('firstName')}/>
              </div>
            </div>
            <div className='last-name-field-container field-container'>
              <label>Last Name</label>
              <div>
                <input type='text' value={this.state.lastName} onChange={this.handleChange('lastName')}/>
              </div>
            </div>
            <div className='email-address-container field-container'>
              <label>Email Address <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.email} onChange={this.handleChange('email')}/>
              </div>
            </div>
            <div className='password-field-container field-container'>
              <label>Choose Password <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.password} onChange={this.handleChange('password')}/>
              </div>
            </div>
            <div className='confirm-password-field-container field-container'>
              <label>Confirm Password <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.passwordConfirm} onChange={this.handleChange('passwordConfirm')}/>
              </div>
            </div>
            <div className='birthdate-container field-container'>
              <label>Birthdate <sup>*</sup></label>
              <div className='birthdate-selector-container'>
                <div className='birthdate-month-selector-container'>
                  <div className='fake-dropdown-button-month'>
                    <div className='fake-dropdown-button-text'>{ parseInt(this.state.selectedMonth) + 1 || 'Month' }</div>
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
                <div className='birthdate-day-selector-container field-container'>
                  <div className='fake-dropdown-button-day'>
                    <div className='fake-dropdown-button-text'>{ this.state.selectedDay || 'Day' }</div>
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
                <div className='birthdate-year-selector-container field-container'>
                  <div className='fake-dropdown-button-year'>
                    <div className='fake-dropdown-button-text'>{ this.state.selectedYear || 'Year' }</div>
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
              <div className='phone-number-field-container field-container'>
                <label>Phone Number</label>
                <div>
                  <input
                    type='text'
                    value={this.state.phoneNumber}
                    onChange={this.handleChange('phoneNumber')}
                    placeholder='(XXX) XXX - XXXX'
                    />
                </div>
              </div>
              <div className='country-select-container field-container'>
                <div>Country <sup>*</sup></div>
                <input onChange={this.handleRadioCountrySelect('usa')} className='radio-button-usa' type='radio'/><img className='radio-button-usa-symbol' src='./img/ic-usa-desktop@3x.jpg'/>
                <input onChange={this.handleRadioCountrySelect('canada')} className='radio-button-canada' type='radio'/><img className='radio-button-canada-symbol' src='./img/ic-canada-desktop@3x.jpg'/>
              </div>
              <div className='zip-postal-code-container field-container'>
                <div>Zip/Postal Code<sup>*</sup></div>
                <input type='text' value={this.state.zipCode} onChange={this.handleChange('zipCode')}/>
              </div>
            </div>
          </div>
        </div>
        <div className='yes-accept-terms-container'>
          <input className='yes-accept-terms-checkbox' type='checkbox'/>
          <div className='yes-accept-terms-text'>Yes, I accept the <u>Terms & Conditions</u> and <u>Privacy Policy</u></div>
        </div>
        <div className='yes-recieve-news-container'>
          <input className='yes-recieve-news-checkbox' type='checkbox'/>
          <div className='yes-recieve-news-text'>Yes, I'd like to recieve news and special offers</div>
        </div>
        <div className='register-button'>
          <div>Register</div>
        </div>
      </>
    )
  }

}

export default Registration
