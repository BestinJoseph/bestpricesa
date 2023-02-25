import { createUseStyles } from 'react-jss'

export default createUseStyles({
    adminSideBar: {
        display: 'grid', 
        gridTemplateColumns: '200px 1fr', 
        gridColumnGap: '1rem',
    },

    adminNavs: {
        padding:'1rem',
        cursor: 'pointer',
        display: 'block',
        textDecoration: 'none',

        '&:hover': {
            background: 'darkblue',
            color: 'white',
        },

        '&:active': {
            background: 'blue',
        }
    }
})