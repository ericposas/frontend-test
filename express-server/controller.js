import User from './models/User'
import bcrypt from 'bcrypt'
import uuid from 'uuid'

const controller = {
  home: (req, res) => res.send('Home.'),
  register: (req, res) => {
    if (
      req.body.firstName && req.body.lastName && req.body.email &&
      req.body.password && req.body.birthdate && req.body.phone &&
      req.body.country && req.body.zip
    ) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            birthdate: req.body.birthdate,
            phone: req.body.phone,
            country: req.body.country,
            zip: req.body.zip
          })
          .save()
          .then(doc => {
            console.log('created User')
            res.send({ success: 'User saved' })
          })
          .catch(err => res.send({ error: 'error saving User' }))
        })
      })
    } else {
      res.send({ error: 'incomplete params' })
    }
  },
  login: (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email })
        .then(doc => {
          if (doc) {
            bcrypt.compare(req.body.password, doc.password, (err, result) => {
              if (err) res.send({ error: 'error occurred saving User' })
              if (result == true) {
                req.session.auth = true
                req.session.user = Object.assign({}, doc._doc)
                delete req.session.user.password
                req.session.maxAge = 1000 * 60 * 15
                req.session.save(() => {
                  console.log('User logged in with session', req.session.user)
                  res.send({ success: req.session.user })
                })
              } else {
                res.send({ error: 'wrong password' })
              }
            })
          } else {
            res.send({ error: 'could not find user by that email address' })
          }
        })
        .catch(err => res.send({ error: 'error logging in' }))
    } else {
      res.send({ error: 'incomplete params' })
    }
  }
}

export default controller
