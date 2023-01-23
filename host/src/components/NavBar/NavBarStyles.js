import { createUseStyles } from 'react-jss'

export default createUseStyles({
    navContainer: {
        position: 'relative',
    },

    navItems: {
        textDecoration: 'none', 
        color: '#FCD271', 
        fontWeight: 700,

        '&:hover': {
            color: '#FCD67F',
        }
    },
    
    loginContainer: {
        position: 'absolute',
        bottom: '-14rem',
        right: '0',
        borderRadius: '5px',
        background: 'white',
        padding: '1rem',
        zIndex: 1,
        boxShadow: '0px 1px 3px gray',

    },

    loginBtn: {
        padding: '.5rem 1rem', 
        fontSize: '1rem', 
        background: '#FCD271', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        border: 'none', 
        color: 'white',

        '&:hover': {
            background: '#FCD67F',
            boxShadow: '0px 1px 3px gray'
        }
    }
})