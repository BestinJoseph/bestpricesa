import mongoose from "mongoose"

const carsSchema = mongoose.Schema({
    model: {
        type: String,
        require: true
    },
    make: {
        type: String,
    },
    images: [],
}, {timeStamps: true})

export default mongoose.model('cars', carsSchema)
