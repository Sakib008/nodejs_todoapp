import express from 'express'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middlewares/error.js'
import cors from 'cors'

export const app = express()

// connecting config or .env file
config({
  path: './data/config.env',
})

// using middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// using routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tasks', taskRouter)

app.get('/', (req, res) => {
  res.send('nice working')
})

// error-handling
app.use(errorMiddleware)
