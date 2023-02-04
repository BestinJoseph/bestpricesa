import React from 'react'
import AddIcon from '@mui/icons-material/Add'

import useStyles from './DealerCarsStyles'

const DealerCars = () => {
    const classes = useStyles()

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <h3>Dealers Car</h3>
                <AddIcon className={ classes.addBtn } />
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default DealerCars
