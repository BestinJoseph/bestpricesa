import mongoose from "mongoose"

const carsSchema = mongoose.Schema({
    model: {
        type: String,
        require: true
    },
    make: {
        type: String,
        require: true
    },
    specification: {
        type: Object,
    },
    price: {
        type: Number,
        require: true
    },
    images: []
}, {timeStamps: true})

export default mongoose.model('cars', carsSchema)
