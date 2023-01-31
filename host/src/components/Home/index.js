import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Catergories from '../../Layouts/Catergories'
import PropoularProducts from '../PopularProducts'
import WinterSale from '../WinterSale'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'REMOVE_CATEGORIES'})
    }, [dispatch])

    return (
        <div style={{ marginBottom: '7rem', }}>
            <Catergories />
            <PropoularProducts />
            <WinterSale  />
        </div>
    )
}

export default Home
