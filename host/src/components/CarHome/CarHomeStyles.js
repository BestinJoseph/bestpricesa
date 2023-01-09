import { createUseStyles } from "react-jss"

export default createUseStyles((theme)=>({
    carHomeContainer: {
        height: '15rem',
        background: 'yellow',

        '& carHomeInnerSection': {
            width: '80%',
            margin: '0 auto',
            color: 'blue',
            padding: '2rem',
        }
    }
}))