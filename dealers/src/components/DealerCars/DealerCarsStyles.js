import { makeStyles } from "@mui/styles"

export default makeStyles(() => ({
    addBtn: {
        cursor: 'pointer',
        border: '1px solid blue',
        marginLeft: '1rem',
        borderRadius: '50%',
        padding: '.5rem',

        '&:hover': {
            background: 'blue',
        }
    }
}))