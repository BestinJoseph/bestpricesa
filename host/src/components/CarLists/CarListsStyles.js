import { stepClasses } from "@mui/material"
import { createUseStyles } from "react-jss"

export default createUseStyles( (theme) => ({
    carlistBtnContainer: {
        marginTop: '2rem', 
        width: '7rem', 
        height: '2.5rem', 
        background: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        cursor: 'pointer',
        color: 'blue', 
        borderRadius: '2.5rem',
        boxShadow: '0px 0px 3px gray',

        '&:hover': {
            background: '#F2F2EF', 
            color: 'green',
        }
        
    },

    carItemContainer: {
        width: '80vw', 
        margin: '0 auto',
        borderBottom: '1px solid #F5F7FA',
        borderTop: '1px solid #F5F7FA',
        padding: '2rem 0',

        '&:hover': {
            borderBottom: '1px solid #dddfe6',
            borderTop: '1px solid #dddfe6',
        }
    },

    carItemImage: {
        width: '100%',

        '&:hover': {
            transform: 'scale(1.25)',
            transition: 'ease-in 0.3s',
        }
    }
}))
