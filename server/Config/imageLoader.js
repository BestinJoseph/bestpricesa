import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        if(!!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(null, `IMAGE-${Date.now()}${path.extname(file.originalname)}` )
        }
        cb(new Error('No file uploaded'), true)
    }
})

export const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
}).single("carImages")