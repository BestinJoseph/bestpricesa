import { createUseStyles } from "react-jss"

export default createUseStyles({
    carHomeContainer: {
        // height: '35rem',
        // background: 'yellow',
        margin: '1rem auto 5rem auto',
    },

    carHomeBreadCrumb: {
        display: 'flex',
        listStyle: 'none',
        paddingLeft: '0',

        '& > :nth-child(n)': {
            paddingRight: '2rem',
            cursor: 'pointer',
        },

        '& > :last-child': {
            paddingRight: '0rem',
            cursor: 'unset',
        }
    },

    carHomeInnerSection: {
        margin: '1rem auto 5rem auto',
        width: '80%',
        marginTop: '3rem',

    },

    carHomeImages: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridAutoFlow: 'column',
        overflow: 'hidden',
        marginTop: '4rem',
        height: '30rem',
        width: '100%',
        overflowX: 'scroll',

        '& > :nth-child(n)': {
            background: 'red',
            // marginBottom: '2rem',
            // border: '1px solid green',
            height: '15rem',
            width: '30rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem',
            color: 'black',
            
            '&:hover': {
                boxShadow: '1px 1px 5px gray',
            }
        },

        '& > :first-child': {
            gridColumn: '1 / span 2',
            gridRow: '1 / span 2',
            // gridColumnStart: 1,
            // gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3,
            background: 'yellow',
            width: '40rem',
            height: '30rem',
        },

        '&:hover': {
            // overflow: 'unset'
        },
    },

    carHomeSpecification: {
        marginTop: '3rem',
        position: 'relative',
        
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0rem',
            left: 0,
            width: '100%',
            height: '2rem',
            boxShadow: '-2px 0 white, 2px 0 white, 0 2px 2px 0px gray',
        },

        '&:active': {
            borderBottom: '1px solid blue',

        }
    },

    carHomeOverView: {
        width: '80%', 
        margin: '3rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '3rem',
    }

})