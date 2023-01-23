import { createUseStyles } from "react-jss";

export default createUseStyles({
    popularItemContainer: {
        display: 'flex',

        '& > :last-child': {
            marginRight: '0rem',
        }
    },

    popularItem: {
        display: 'grid', 
        gridTemplateRows: '.5fr 3fr 1fr', 
        height: '15rem', 
        width: '10rem', 
        borderRadius: '1rem', 
        marginRight: '2rem', 
        padding: '1rem',
        boxShadow: '0px 0px 5px gray',
        position: 'relative',
        backgroundSize: 'cover',
        // backgroundPosition: 'center center',
        cursor: 'pointer',
        transition: 'ease-in .5s',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',

        '& > :last-child': {
            marginRight: '0rem',
        },

        '&:hover': {
            outline: '1px solid #FCD271',
            boxShadow: '0px 0px 10px gray',
            backgroundSize: 'auto 120%',
            backgroundRepeat: 'no-repeat',
        }
    }
})