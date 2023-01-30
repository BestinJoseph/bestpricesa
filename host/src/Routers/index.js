import React from 'react'
import { BrowserRouter as Router, Routes, Route, hashHistory } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import Home from '../components/Home'
import About from '../components/About'
import CarLists from '../components/CarLists'
import CarHome from '../components/CarHome'
import DealerHome from '../components/DealerHome'
import UserAccount from '../components/UserAccount'
import Page404 from '../components/Page404'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routers = () => {

    return (
        <Router history={hashHistory}>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/catergories" element={<CarLists />}/>
                <Route path="/catergories/:cat" element={<CarLists />}/>
                <Route path="/catergories/:cat/:item" element={<CarHome />}/>
                <Route path="/dealers" element={<DealerHome />}/>
                {/* <Route path="/dealers/:dealer" element={<Home />}/> */}
                <Route path="/about" element={<About />}/>
                <Route element={<PrivateRoutes />}>
                    <Route path="user" element={<UserAccount />}/>
                </Route>
                <Route path="/*" element={<Page404 />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routers
