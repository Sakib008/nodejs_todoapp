import express from 'express'
import { getMyProfile, login, logout, register } from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js'

// define router
const router = express.Router()

// using router

router.post('/new', register)

router.post('/login', login)

router.get('/logout', logout)

router.get('/me', isAuthenticated, getMyProfile)

export default router
