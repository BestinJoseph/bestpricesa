import React from 'react'

import Catergories from '../../Layouts/Catergories'
import PropoularProducts from '../PopularProducts'
import WinterSale from '../WinterSale'

const Home = () => {
    return (
        <div style={{ marginBottom: '7rem', }}>
            <Catergories />
            <PropoularProducts />
            <WinterSale  />
        </div>
    )
}

export default Home
