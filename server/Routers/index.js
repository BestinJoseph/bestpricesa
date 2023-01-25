import express from 'express'
const router = express.Router()

import { homeController } from '../Controllers/hostControllers.js'

router.route('/').all().get(homeController)

export default router
