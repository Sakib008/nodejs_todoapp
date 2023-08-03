import express from 'express'
import {
  deleteTask,
  getAllTask,
  newTask,
  updateTask,
} from '../controllers/task.js'
import { isAuthenticated } from '../middlewares/auth.js'

// define router
const router = express.Router()

// using router

router.post('/new', isAuthenticated, newTask)
router.get('/all', isAuthenticated, getAllTask)
router.route('/:id').put(updateTask).delete(deleteTask)

export default router
