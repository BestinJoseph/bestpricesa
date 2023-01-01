import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Header from 'host/Header'
import Footer from '../Layouts/Footer'
import CarHome from '../components/CarHome'

const Routers = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cars" element={<CarHome />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routers
