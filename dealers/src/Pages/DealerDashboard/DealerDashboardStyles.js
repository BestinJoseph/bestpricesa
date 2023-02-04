import { makeStyles } from '@mui/styles'

export default makeStyles(() =>({
    linkStyles: {
        padding: '1rem', 
        // background: 'gray', 
        fontWeight: '600', 
        listStyle: 'none', 
        textDecoration: 'none',

        '&:hover': {
            background: '#ECF9FF', 
        },

        '&:activer': {
            background: '#ECF9FF',
        }
    }
}))
