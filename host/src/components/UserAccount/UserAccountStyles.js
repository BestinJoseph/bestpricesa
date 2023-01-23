import { createUseStyles } from "react-jss";

export default createUseStyles({
    userAccountContainer: {
        
    },
    userAccountBanner: {
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: 'white',

    },

    tabItem: {
        padding: '1rem',
        borderBottom: '1px solid #2e3440',
        cursor: 'pointer',

        '&:hover': {
            background: '#2e3440'
        }
    }
})