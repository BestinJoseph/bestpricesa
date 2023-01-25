import express from 'express'
import cors from 'cors'

import './Config/db.js'

import host from './Routers/index.js'
import cars from './Routers/carsRouter.js'

const app = express()

const port = process.env.PORT || 8000

app.use(cors())

app.use('/api', host)
app.use('/api/cars', cars)

app.listen(port, () => console.log('server running on ' + port ))
