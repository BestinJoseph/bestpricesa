import { createUseStyles } from "react-jss";

export default createUseStyles(() => ({
    carOverviewContainer: {
        width: '80%', 
        margin: '3rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '3rem',
    }
}))