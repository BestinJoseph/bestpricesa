import { createUseStyles } from "react-jss"

export default createUseStyles({
    bannerContainer: {
        backgroundImage: `url(${process.env.REACT_APP_API_URL}/images/banner.jpg)`,
        backgroundSize: '100%',
        backgroundPositionY: 'center',
        
    }
})