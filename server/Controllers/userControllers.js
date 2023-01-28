import User from '../Models/userModel.js'
import jwt from 'jsonwebtoken'
import { getToken, COOKIE_OPTIONS, getRefreshToken } from '../authenticate.js'


export const signUpUser = (req, res) => {
    if( !req.body.firstName) {
        res.status(500).json({errors: 'FirstNameError', success: false, data: null })
    } else {
        User.register(
            new User({username: req.body.username}), req.body.password, (err, user) => {
                if (err) {
                    res.status(500).json({errors: err, success: false, data: null })
                } else {
                    user.firstName = req.body.firstName
                    user.lastName = req.body.lastName || ""
                    const token = getToken({_id: user._id})
                    const refreshToken = getRefreshToken({_id: user._id})
                    user.refreshToken.push({ refreshToken })
                    user.save((err, user) => {
                        if(err) {
                            res.status(500).json({errors: err, success: false, data: null })
                        } else {
                            if (user) {
                                res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                                res.status(200).json({errors: null, success: true, data: { token }})
                            }
                        }
                    })
                }
            }
        )
    }
}

export const signInUser = (req, res, next) => {
    try {
        const token = getToken({_id: req.user._id})
        const refreshToken = getRefreshToken({_id: req.user._id})
        User.findOne({_id: req.user._id}).then(
            user => {
                user.refreshToken.push({ refreshToken })
                user.save( (err, user) => {
                    if(err) {
                        res.status(500).json({errors: err, success: false, data: null })
                    } else {
                        if (user) {
                            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                            res.status(200).json({errors: null, success: true, data: { token }})
                        }
                    }
                })
            },
            err => next(err)
        )
    } catch (err) {
        res.status(500).json({errors: err, success: false, data: null })
    }
}

export const refreshToken = (req, res) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies
    if(refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            const userId = payload._id
            User.findOne({_id: userId}).then(
                user => {
                    if(user) {
                        const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken )
                        if(tokenIndex === -1) {
                            res.status(401).json({errors: "unauthorized", success: false, data: null })
                        } else {
                            const token = getToken({ _id: user._id })
                            const newRefreshToken = getRefreshToken({ _id: user._id })
                            user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken }
                            user.save( (err, user) => {
                                if(err) {
                                    res.status(500).json({errors: err, success: false, data: null })
                                } else {
                                    res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS)
                                    res.status(200).json({errors: null, success: true, data: { token }})
                                }
                            })
                        }
                    } else {
                        res.status(401).json({errors: "unauthorized", success: false, data: null })
                    }
                }
            )
        } catch (err) {
            res.status(401).json({errors: err, success: false, data: null })
        }
    } else {
        res.status(401).json({errors: "unauthorized", success: false, data: null })
    }
}

export const userProfile = (req, res) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies
    User.findById(req.user._id).then(
        user => {
            const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken )
            if ( tokenIndex === -1) {
                res.status(401).json({errors: "You are not logged in.", success: false, data: null })
            } else {
                res.status(200).json({errors: null, success: true, data: { user }})
            }
        }
    )
}

export const signOffUser = (req, res, next) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies
    User.findById(req.user._id).then(
        user => {
            const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken)
            // console.log(tokenIndex)
            if( tokenIndex !== -1) {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()

                user.save((err, user) => {
                    if (err) {
                        res.status(401).json({errors: err, success: false, data: null })
                    } else {
                        res.clearCookie("refeshToken", COOKIE_OPTIONS)
                        res.status(200).json({errors: null, success: true, data: { msg: 'successfully logout' }})
                    }
                })
            } else {
                res.status(401).json({errors: "You are not logged in.", success: false, data: null })
            }
        }
    ),
    err => next(err)
}