import mongoose from "mongoose"

const dealerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        default: ''
    },
    cars: [
        { 
            car: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'cars'
            },
            price: {
                type: Number,
                default: 0
            },
            stock: {
                type: Number,
                default: 0
            }
        }
    ],
    logo: {
        type: String,
    },
    contact: [
        {
            name: {
                type: String,
                default: ''
            },
            mobile: {
                type: String,
                require: true
            },
            email: {
                type: String,
                default: ''
            },
            desigination: {
                type: String,
                default: ''
            }
        }
    ]
})

export default mongoose.model('dealers', dealerSchema)