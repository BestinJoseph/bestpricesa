import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(null, `IMAGE-${Date.now()}.${path.extname(file.originalname)}` )
            return console.log('nice....')
        }
        cb(undefined, true)
    }
})

export const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
}).single("carImages")
