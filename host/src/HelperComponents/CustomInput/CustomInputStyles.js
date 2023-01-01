import { createUseStyles } from 'react-jss'

export default createUseStyles({
    inputCss: {
        borderRadius: '0',
        padding: '.25rem .75rem', fontSize: '1.15rem',
        backgroundColor: (theme) => theme.types === 'submit' ? 'voilet' : null,
        height: (theme) => (theme.types === 'submit' ? '0rem' : 'none'),
        border: (theme) => theme.types !== 'submit' ? '.5px solid #453C67' : 'none',
    }
})