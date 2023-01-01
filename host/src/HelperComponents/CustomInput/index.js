import React from 'react'

import styles from './CustomInputStyles'

const CustomInput = ({types}) => {

    const classes = styles(types)
    console.log(types)

    return (
        <input 
            className={classes.inputCss} 
            type={ types === "submit" ? "submit" : 'text'}
            placeholder={types === "submit" ? null : types.toLocaleUpperCase()} 
            // value={type === "submit" ? "Search" : ''}
        />
    )
}

export default CustomInput