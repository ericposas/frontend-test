import { Router } from 'express'
import controller from './controller'

const router = Router()

router
  .get('/', controller.home)
  .post('/register', controller.register)
  .post('/login', controller.login)
  .post('/sessionCheck', controller.sessionCheck)
  .post('/logout', controller.logout)

export default router
