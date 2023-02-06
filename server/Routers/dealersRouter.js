import express from 'express'
const router = express.Router()

import { getAllDealers, postDealer, updateDealerCars } from '../Controllers/dealersControllers.js'


router.route('/').all().get(getAllDealers)
router.route('/').all().post(postDealer)
router.route('/:_id').all().put(updateDealerCars)

export default router
