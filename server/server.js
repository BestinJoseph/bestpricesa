import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import cookieparser from 'cookie-parser'
import session from 'express-session'

if(process.env.NODE_ENV === 'development') {
    dotenv.config()
}

import './Config/db.js'
import './Strategies/JWTStrategy.js'
import './Strategies/LocalStrategy.js'
import './authenticate.js'

import host from './Routers/index.js'
import users from './Routers/userRouter.js'
import cars from './Routers/carsRouter.js'

const app = express()

const port = process.env.PORT || 8000

app.use(cookieparser(process.env.COOKIE_SECRET))
app.use(express.json({}))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))
app.use('/images', express.static('public/images'))

app.use('/api', host)
app.use('/api/auth', users)
app.use('/api/cars', cars)

app.listen(port, () => console.log('server running on ' + port ))
