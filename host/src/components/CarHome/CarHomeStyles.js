import { createUseStyles } from "react-jss"

export default createUseStyles({
    carHomeContainer: {
        width: '80%',
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
        marginTop: '3rem',

    },

    carHomeImages: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridAutoFlow: 'column',
        overflow: 'hidden',
        marginTop: '4rem',

        '& > :nth-child(n)': {
            background: 'red',
            // marginBottom: '2rem',
            // border: '1px solid green',
            height: '11rem',
            width: '20rem',
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
            height: '22rem',
        },

        '&:hover': {
            overflow: 'unset'
        }
    },

    carHomeSpecification: {
        marginTop: '3rem',
    }

})