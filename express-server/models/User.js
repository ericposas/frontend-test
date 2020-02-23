import mongoose, { Schema, Types } from 'mongoose'

const User = mongoose.model('User', new Schema({
  firstName: {
    type: String,
    default: null
  },
  lastName: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  password: {
    type: String,
    default: null
  },
  birthdate: {
    type: Date,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  zip: {
    type: String,
    default: null
  }
}))

export default User
