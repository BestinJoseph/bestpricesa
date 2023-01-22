import React from 'react'

import styles from './CustomInputStyles'

const CustomInput = ({searchs, setSearch}) => {
    const types = 'input'
    const classes = styles(types)

    const handleInputField = (e) => {
        setSearch( prev => ({
            ...prev, [searchs[0]]: e.target.value
        }))
    }

    return (
        <input 
            className={classes.inputCss} 
            type={ types === "submit" ? "submit" : 'text'}
            placeholder={ searchs[0].toLocaleUpperCase() }
            // value={type === "submit" ? "Search" : ''}
            onChange={(e) => handleInputField(e)}
            value={searchs[1]}
        />
    )
}

export default CustomInput