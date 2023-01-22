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

const Routers = () => {

    return (
        <Router history={hashHistory}>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cars" element={<CarLists />}/>
                <Route path="/cars/:car" element={<CarHome />}/>
                <Route path="/dealers" element={<DealerHome />}/>
                <Route path="/dealers/:dealer" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routers
