import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'

import { getFilterCars } from '../../Actions/searchAction'
import CustomInput from '../../HelperComponents/CustomInput'

const SearchBox = () => {
    const params = useParams()
    const [search, setSearch] = useState({make: '', model: '', variant: '', min: '', max: ''})
    const inputs = ["make", "model", "variant", "Min", "Max"]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFilterCars(search))
    },[dispatch, search])

    const handleClearSearch = (type) => {
        setSearch( prev => ({
            ...prev, [type]: ''
        }))
    }

    console.log(params)

    return (
        <div>
            {
                params && params.cat === 'cars' ? <React.Fragment>
                    <div style={{marginBottom: '1rem', }}>
                        <h3>Make and Type</h3>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: `repeat(${inputs.length}, 1fr)`, gridGap: '.5rem', }}>
                        {
                            search && Object.entries(search).map((searc, i) => ( 
                                <CustomInput types='text' key={i} searchs={searc} setSearch={setSearch} /> 
                            ))
                        }
                    </div>
                    <div style={{ display: 'flex', marginTop: '2rem', height: '3rem', alignItems: 'center', }}>
                        <h4 style={{ marginRight: '1rem', }}>Search items: </h4>
                        <ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', }}>
                            {
                                search && Object.entries( search).map((sea, j) => (
                                    <React.Fragment key={j} >
                                        {
                                            sea[1] === '' ? null : 
                                            <li style={{ padding: '.5rem .75rem', marginRight: '1rem', boxShadow: '1px 0px 2px gray', borderRadius: '1rem', display: 'flex', alignItems: 'center'}}>
                                                <span style={{ paddingRight: '.25rem', }}>{ sea[1] === '' ? null : sea[1] }</span>
                                                <VscClose style={{ cursor: 'pointer', fontSize: '1.25rem', }} onClick={() => handleClearSearch(sea[0])}/>
                                            </li>
                                        }
                                    </React.Fragment>
                                ))
                            }
                        </ul>
                    </div>
                </React.Fragment> : <div>wel</div>
            }
        </div>
    )
}

export default SearchBox