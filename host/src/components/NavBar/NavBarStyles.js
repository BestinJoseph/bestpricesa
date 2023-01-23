import { createUseStyles } from 'react-jss'

export default createUseStyles({
    navContainer: {
        position: 'relative',
    },
    
    loginContainer: {
        position: 'absolute',
        bottom: '-13.25rem',
        right: '0',
        borderRadius: '5px',
        background: 'white',
        padding: '1rem',
        zIndex: 1,
        boxShadow: '0px 1px 3px gray',

    }
})