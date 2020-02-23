import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import monthDays from 'month-days'
import { validate } from 'email-validator'
import passwordValidation from 'password-validator'
import phone from 'phone'
import axios from 'axios'

const passwordSchema = new passwordValidation()
passwordSchema
  .is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().not().spaces()
  .is().not().oneOf(['Passw0rd', 'Password123'])
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
  'Nov', 'Dec'
]

class Registration extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    selectedMonth: 'Jan',
    selectedDay: 1,
    selectedYear: 1980,
    phoneNumber: '',
    zipCode: '',
    selectedCountry: null,
    acceptTerms: false,
    recieveNews: false,
    showTooltip: false,
  }

  tooltipRef = React.createRef()

  helpIconRef = React.createRef()

  errorTextRef = React.createRef()

  onWindowResize = () => {
    this.setState({
      innerWidth: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  handleChange = type => e => {
    this.setState({
      [type]: e.target.value
    })
  }

  handleRadioCountrySelect = country => e => {
    this.setState({
      selectedCountry: country
    })
  }

  handleRegisterClick = () => {
    this.setState({
      submitAttempt: true
    })
  }

  handleRegisterClickSuccess = () => {
    alert('Success!')
  }

  handleAcceptTerms = () => {
    this.setState({
      acceptTerms: !this.state.acceptTerms
    })
  }

  handleToolTip = e => {
    this.setState({
      showTooltip: !this.state.showTooltip
    })
  }

  render() {

    const firstNameValidator = (this.state.firstName == '' || !isNaN(this.state.firstName)) && this.state.submitAttempt
    const lastNameValidator = (this.state.lastName == '' || !isNaN(this.state.lastName)) && this.state.submitAttempt
    const emailValidator = !validate(this.state.email) && this.state.submitAttempt
    const passwordValidator = !passwordSchema.validate(this.state.password) && this.state.submitAttempt
    const passwordConfirmValidator = ((!(this.state.passwordConfirm == this.state.password) || this.state.passwordConfirm == '') && this.state.submitAttempt)
    const birthdateValidator = (!this.state.selectedMonth || !this.state.selectedDay || !this.state.selectedYear) && this.state.submitAttempt
    const phoneValidator = (this.state.phoneNumber == '' || phone(this.state.phoneNumber).length == 0) && this.state.submitAttempt
    const countryValidator = (this.state.selectedCountry == null) && this.state.submitAttempt
    const zipCodeValidator = (this.state.zipCode == '' || this.state.zipCode.length < 5) && this.state.submitAttempt
    const acceptTermsValidator = (this.state.acceptTerms || !this.state.submitAttempt)

    return (
      <>
        <div
          ref={this.tooltipRef}
          className='tooltip'
          style={{
            opacity: this.state.showTooltip ? 1 : 0,
            left: this.helpIconRef.current && this.tooltipRef.current ? `${this.helpIconRef.current.offsetLeft - parseInt(window.getComputedStyle(this.tooltipRef.current).getPropertyValue('width')) }px` : '',
            top: this.helpIconRef.current && this.tooltipRef.current ? `${this.helpIconRef.current.offsetTop - parseInt(window.getComputedStyle(this.tooltipRef.current).getPropertyValue('height')) - 35}px` : ''
          }}>
          We'll use this to send you birthday bonus{ this.state.innerWidth > 768 ? <><br/></> : null } points.
        </div>
        <div className='banner-my-company'>
          <img src='./img/logo-desktop@3x.png'/>
        </div>
        <div
          className='banner-register'
          style={{ backgroundImage: 'url(./img/gradient-strip.jpg)' }}
          >REGISTER</div>
        <div className='enter-your-information-text'>
          Enter your information below for exclusive{ this.state.innerWidth < 768 ? <><br/></> : null } offers, promotions{ this.state.innerWidth > 768 ? <><br/></> : null } and savings.
        </div>
        <div className='center-content'>
          <div className='form-block'>
            <div><sup>*</sup> Fields required</div>
            <div className='first-name-field-container field-container'>
              <label style={{ color: firstNameValidator ? 'red' : '#565656' }}>First Name <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.firstName} onChange={this.handleChange('firstName')}/>
              </div>
            </div>
            <div className='last-name-field-container field-container'>
              <label style={{ color: lastNameValidator ? 'red' : '#565656' }}>Last Name <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.lastName} onChange={this.handleChange('lastName')}/>
              </div>
            </div>
            <div className='email-address-container field-container'>
              <label style={{ color: emailValidator ? 'red' : '#565656' }}>Email Address <sup>*</sup></label>
              <div>
                <input type='text' value={this.state.email} onChange={this.handleChange('email')}/>
              </div>
            </div>
            <div className='password-field-container field-container'>
              <label style={{ color: passwordValidator ? 'red' : '#565656' }}>Choose Password <sup>*</sup></label>
              <div>
                <input type='password' value={this.state.password} onChange={this.handleChange('password')}/>
              </div>
            </div>
            <div className='confirm-password-field-container field-container'>
              <label style={{ color: passwordConfirmValidator ? 'red' : '#565656' }}>Confirm Password <sup>*</sup></label>
              <div>
                <input type='password' value={this.state.passwordConfirm} onChange={this.handleChange('passwordConfirm')}/>
              </div>
            </div>
            <div className='birthdate-container field-container'>
              <label style={{ color: birthdateValidator ? 'red' : '#565656' }}>Birthdate <sup>*</sup></label>
              <div className='birthdate-selector-container'>
                <div className='birthdate-month-selector-container'>
                  <div className='fake-dropdown-button-month'>
                    <div className='fake-dropdown-button-text' style={{ color: this.state.selectedMonth == null ? '#CCC' : '#565656' }}>{ this.state.selectedMonth || 'Month' }</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-month-selector'
                    onChange={this.handleChange('selectedMonth')}>
                    {
                      months.map((month, i) => <option key={`month-${i}`} value={month}>{month}</option>)
                    }
                  </select>
                </div>
                <div className='birthdate-day-selector-container field-container'>
                  <div className='fake-dropdown-button-day'>
                    <div className='fake-dropdown-button-text' style={{ color: this.state.selectedDay == null ? '#CCC' : '#565656' }}>{ this.state.selectedDay || 'Day' }</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-day-selector'
                    onChange={this.handleChange('selectedDay')}>
                    {
                      Array(monthDays({ month: months.indexOf(this.state.selectedMonth), year: 2020 }) || 0)
                        .fill(monthDays({ month: months.indexOf(this.state.selectedMonth), year: 2020 }) || 0)
                        .map((option, i) => <option key={`day-${i}`} value={option-i}>{option-i}</option>)
                        .reverse()
                    }
                  </select>
                </div>
                <div className='birthdate-year-selector-container field-container'>
                  <img ref={this.helpIconRef} onClick={this.handleToolTip} src='./img/ico-help-desktop@3x.png' style={{ width: '20px', float: 'right', marginRight: '-4px', marginTop: '-32px', cursor: 'pointer', zIndex: 20 }}/>
                  <div className='fake-dropdown-button-year'>
                    <div className='fake-dropdown-button-text' style={{ color: this.state.selectedYear == null ? '#CCC' : '#565656' }}>{ this.state.selectedYear || 'Year' }</div>
                    <img className='dropdown-arrow' src='./img/dropdown-arrow-desktop.png'/>
                  </div>
                  <select
                    className='birthdate-year-selector'
                    onChange={this.handleChange('selectedYear')}>
                    {
                      this.state.selectedMonth && this.state.selectedDay
                      ?
                      Array(121)
                        .fill(1900)
                        .map((year, i) => <option key={`year-${i}`} value={year + i}>{year + i}</option>)
                      : null
                    }
                  </select>
                </div>
              </div>
              <br/>
              <div className='phone-number-field-container field-container'>
                <label style={{ color: phoneValidator ? 'red' : '#565656' }}>Phone Number</label>
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
                <div style={{ color: countryValidator ? 'red' : '#000' }}>Country <sup>*</sup></div>
                <input checked={ this.state.selectedCountry == 'usa' ? true : false } onChange={this.handleRadioCountrySelect('usa')} className='radio-button-usa' type='radio'/><img className='radio-button-usa-symbol' src='./img/ic-usa-desktop@3x.jpg'/>
                <input checked={ this.state.selectedCountry == 'canada' ? true : false } onChange={this.handleRadioCountrySelect('canada')} className='radio-button-canada' type='radio'/><img className='radio-button-canada-symbol' src='./img/ic-canada-desktop@3x.jpg'/>
              </div>
              <div className='zip-postal-code-container field-container'>
                <div style={{ color: zipCodeValidator ? 'red' : '#000' }}>Zip/Postal Code<sup>*</sup></div>
                <input type='text' value={this.state.zipCode} onChange={this.handleChange('zipCode')}/>
              </div>
            </div>
          </div>
        </div>
        <div className='yes-accept-terms-container'>
          <input onChange={this.handleAcceptTerms} style={{ boxShadow: acceptTermsValidator ? 'none' : '0 0 0 2px red' }} className='yes-accept-terms-checkbox' type='checkbox'/>
          <div style={{ color: acceptTermsValidator ? '#565656' : 'red' }} className='yes-accept-terms-text'>Yes, I accept the <u>Terms & Conditions</u> and <u>Privacy Policy</u></div>
        </div>
        <div className='yes-recieve-news-container'>
          <input onChange={() => this.setState({ recieveNews: !this.state.recieveNews })} className='yes-recieve-news-checkbox' type='checkbox'/>
          <div className='yes-recieve-news-text'>Yes, I'd like to recieve news and special offers</div>
        </div>
        <div className='register-button'>
          {
            (
              firstNameValidator || lastNameValidator || emailValidator ||
              passwordValidator || passwordConfirmValidator || birthdateValidator ||
              phoneValidator || countryValidator || zipCodeValidator ||
              !acceptTermsValidator || !this.state.submitAttempt
            )
            ? <div onClick={this.handleRegisterClick}>REGISTER</div>
            : <div onClick={this.handleRegisterClickSuccess}>REGISTER</div>
          }
        </div>
        <div className='error-block'>
          <div
            ref={this.errorTextRef}
            style={{
              color: (
                firstNameValidator || lastNameValidator || emailValidator ||
                passwordValidator || passwordConfirmValidator || birthdateValidator ||
                phoneValidator || countryValidator || zipCodeValidator || !acceptTermsValidator
              ) ? 'red' : 'rgba(0,0,0,0)',
              display: (
                firstNameValidator || lastNameValidator || emailValidator ||
                passwordValidator || passwordConfirmValidator || birthdateValidator ||
                phoneValidator || countryValidator || zipCodeValidator || !acceptTermsValidator
              ) ? 'block' : 'none'
            }}
            className='error-text'>The following errors have occurred:</div>
          <div
            style={{
              color: firstNameValidator ? 'red' : 'rgba(0,0,0,0)',
              display: firstNameValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid First Name
          </div>
          <div
            style={{
              color: lastNameValidator ? 'red' : 'rgba(0,0,0,0)',
              display: lastNameValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Last Name
          </div>
          <div
            style={{
              color: emailValidator ? 'red' : 'rgba(0,0,0,0)',
              display: emailValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Email Address
          </div>
          <div
            style={{
              color: passwordValidator ? 'red' : 'rgba(0,0,0,0)',
              display: passwordValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Password - password must have at least 8 chars, <br/>uppercase letters, lowercase letters, and digits
          </div>
          <div
            style={{
              color: passwordConfirmValidator ? 'red' : 'rgba(0,0,0,0)',
              display: passwordConfirmValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Passwords don't match
          </div>
          <div
            style={{
              color: birthdateValidator ? 'red' : 'rgba(0,0,0,0)',
              display: birthdateValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Birthdate
          </div>
          <div
            style={{
              color: phoneValidator ? 'red' : 'rgba(0,0,0,0)',
              display: phoneValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Phone Number
          </div>
          <div
            style={{
              color: countryValidator ? 'red' : 'rgba(0,0,0,0)',
              display: countryValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Please Select a Country
          </div>
          <div
            style={{
              color: zipCodeValidator ? 'red' : 'rgba(0,0,0,0)',
              display: zipCodeValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - Invalid Zip Code
          </div>
          <div
            style={{
              color: !acceptTermsValidator ? 'red' : 'rgba(0,0,0,0)',
              display: !acceptTermsValidator ? 'block' : 'none'
            }}
            className='error-text'>
            - You need to accept the terms & conditions and privacy policy
          </div>
        </div>
        {
          this.errorTextRef.current && window.getComputedStyle(this.errorTextRef.current).getPropertyValue('color') != 'red'
          ? <div style={{ paddingBottom: '150px' }}></div>
          : null
        }
      </>
    )
  }

}

export default Registration
