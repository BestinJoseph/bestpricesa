import { createUseStyles } from "react-jss";

export default createUseStyles({
    lrItem: {
        width: '22rem', 
        borderRadius: '5px', 
        boxShadow: '0 2px 5px #D6E4E5', 
        background: 'white',
        cursor: 'pointer',

        '&:hover': {
            outline: '1px solid #FCD271'
        }
    }
})