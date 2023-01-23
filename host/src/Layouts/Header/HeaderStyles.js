import { createUseStyles } from "react-jss"

import background from '../../assets/images/banner.jpg'

export default createUseStyles({
    bannerContainer: {
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner.jpg')`,
        backgroundSize: '100%',
        backgroundPositionY: 'center',
        
    }
})