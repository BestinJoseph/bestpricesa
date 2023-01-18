import { createUseStyles } from "react-jss"

export default createUseStyles((theme)=>({
    dealerContainer: {
        display: 'grid', 
        gridTemplateColumns: `repeat(7, 1fr)`,
        gridGap: '.5rem',
        overflow: 'hidden', 
        height: '100%',
        padding: '0 1rem',

        '&:hover': {
            
        }
    },
    dealerItem: {
        width: '5rem', 
        padding: '.75rem', 
        border: '1px solid gray', 
        marginRight: '.1rem',
        cursor: 'pointer',

        '&:hover': {
            boxShadow: '0px 0px 6px #888888'
        }
    },

    imageContainer: {
        height: '5.5rem',
    }
}))