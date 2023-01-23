import { createUseStyles } from "react-jss"

import background from '../../assets/images/banner.jpg'

export default createUseStyles({
    bannerContainer: {
        background: `url(${background})`,
        backgroundSize: '100%',
        backgroundPositionY: 'center',
        
    }
})