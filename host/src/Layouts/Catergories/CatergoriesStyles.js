import { createUseStyles } from "react-jss";

export default createUseStyles({
    categoriesItem: {
        // border: '1px solid gray', 
        width: '5rem', 
        height: '5rem', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '1rem', 
        cursor: 'pointer',

        '&:hover': {
            border: '1px solid #FCD271', 
        }
    },

    categoriesIcon: {
        color: '#FCD271',
        fontSize: '2rem',

        '&:hover': {
            // color: 'yellow',
        }
    }
})