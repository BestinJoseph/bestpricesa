import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import passport from 'passport'
import cookieparser from 'cookie-parser'
import session from 'express-session'
import { fileURLToPath } from 'url'
import path from 'path'
<<<<<<< HEAD
import fs from 'fs'
=======
>>>>>>> 4704d09a4afd4885fb0fe3c6643ee65c4f658fe1

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
import dealers from './Routers/dealersRouter.js'

const app = express()

const port = process.env.PORT || 8000
const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

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

<<<<<<< HEAD
//static images folder
app.use('/api/images', express.static('./public/images'))
// app.use(express.static(__dirname + '/images'))
// app.use(express.static('images'))
=======
// app.use(express.static('public'))
// app.use(express.static(`${__dirname}/images`))
app.use('/api/images', express.static(path.join('./public/images')))
>>>>>>> 4704d09a4afd4885fb0fe3c6643ee65c4f658fe1

app.use('/api', host)
app.use('/api/auth', users)
app.use('/api/cars', cars)
app.use('/api/dealers', dealers)

// app.get('/images/:image', (req, res) => {
//     console.log('nice....')
//     fs.readFile('public', (err, data) => {
//         if(err) return
//         res.writeHead(200, {'Content-Type': 'image/png'})
//         res.end(data, 'utf8')
//     })
// })

app.listen(port, () => console.log('server running on ' + port ))
