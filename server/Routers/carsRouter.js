import express from 'express'
const router = express.Router()

import { getAllCars } from '../Controllers/carsControllers.js'


router.route('/').all().get(getAllCars)

export default router
