import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useParams } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'

import NavBar from '../../components/NavBar'
import CustomInput from '../../HelperComponents/CustomInput'
import { getFilterCars } from '../../Actions/searchAction'

const Header = () => {
    const location = useLocation()
    const inputs = ["make", "model", "variant", "Min", "Max"]
    const dispatch = useDispatch()
    const users = useSelector( state => state.users )
    const [search, setSearch] = useState({make: '', model: '', variant: '', min: '', max: ''})

    useEffect(() => {
        dispatch(getFilterCars(search))
    },[dispatch, search])

    const handleClearSearch = (type) => {
        setSearch( prev => ({
            ...prev, [type]: ''
        }))
    }

    // console.log(search)

    return (
        <React.Fragment>
            {
                location.pathname && location.pathname === '/' ? (
                    <div style={{ margin: '0 auto', width: '80%',}}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {
                                users && <NavBar users={users} well={"nice"} />
                            }
                        </div>
                        <div style={{width: '50%', display: 'flex', alignItems: 'center', height: '22rem', marginBottom: '1.5rem', }}>
                            <div  style={{ border: '1px solid violet', borderRadius: '.75rem', padding: '2rem', width: '80%', }}>
                                <h2 style={{ paddingBottom: '1.5rem', color: 'violet', }}>Best Price</h2>
                                <h1 style={{ paddingBottom: '1.25rem'}}>Compare prices on 2.6 million products from 6 100 UK shops</h1>
                                <div style={{display: 'flex', }}>
                                    <input type="text" style={{width: '80%', padding: '.5rem', fontSize: '1.5rem', borderRadius: '5px', marginRight: '1rem', }}/>
                                    <h5>Search</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <React.Fragment>
                        <div style={{width: '80%', margin: '0 auto', display: 'grid', gridTemplateRows: 'auto 3fr', }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                <div style={{display: 'flex', alignItems: 'center', }}>
                                    <h1 style={{marginRight: '1rem', }}><Link to="/" style={{color: 'violet', textDecorationLine: 'none', }}>BestPrice</Link></h1>
                                    <p>Riyadh</p>
                                </div>
                                <NavBar />
                            </div>
                            <div style={{border: 'none', marginTop: '2rem', }}>
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
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Header
