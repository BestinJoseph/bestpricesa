import { createUseStyles } from 'react-jss'

export default createUseStyles({
    inputCss: {
        borderRadius: '0.25rem',
        padding: '.75rem .5rem', 
        fontSize: '1.15rem',
        backgroundColor: (theme) => theme.types === 'submit' ? 'voilet' : null,
        height: (theme) => (theme.types === 'submit' ? '2rem' : 'none'),
        border: (theme) => theme.types !== 'submit' ? '.5px solid #453C67' : 'none',
        width: '',
        // marginRight: '1rem',

        '&:focus': {
            outline: '.5px solid blue',
        }
    }
})