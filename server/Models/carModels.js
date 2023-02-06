import mongoose from "mongoose"

const carsSchema = mongoose.Schema({
    model: {
        type: String,
        require: true
    },
    make: {
        type: String,
    },
    specification: {
        type: {}
    },
    price: {
        type: Number,
        default: 0
    },
    images: [],
}, {timeStamps: true})

export default mongoose.model('cars', carsSchema)
