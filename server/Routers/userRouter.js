import express from 'express'
import passport from 'passport'

import { verifyUser } from '../authenticate.js'

const router = express.Router()

import { signUpUser, signInUser, refreshToken, signOffUser, userProfile } from '../Controllers/userControllers.js'

router.route('/signup').all().post(signUpUser)
router.route('/signin').all(passport.authenticate("local")).post(signInUser)
router.route('/refreshtoken').all().post(refreshToken)
router.route('/signoff').all(verifyUser).get(signOffUser)
router.route('/profile').all(verifyUser).get(userProfile)

export default router
