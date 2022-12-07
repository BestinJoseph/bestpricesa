import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Header from '../Layouts/Header'

const Routers = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </Router>
    )
}

export default Routers
