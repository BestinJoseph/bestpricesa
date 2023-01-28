import mongoose from "mongoose"
import passportLocalMongoose from 'passport-local-mongoose'

const Session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: ''
    }
})

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        default: ''
    },
    authStrategy: {
        type: String,
        default: "local"
    },
    points: {
        type: Number,
        default: 50
    },
    refreshToken: {
        type: [Session]
    }
})

userSchema.set("toJSON", {
    transform: function (doc, ret, options) {
        delete ret.refreshToken
        return ret
    }
})

userSchema.plugin(passportLocalMongoose)

export default mongoose.model('users', userSchema)
