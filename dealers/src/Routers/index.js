import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DealerCars from '../components/DealerCars'
import Dashboard from '../components/Dashboard'
import DealerAccount from '../components/DealerAccount'
import { DealerDashboard } from '../Pages'
import DealerLogin from '../Pages/DealerLogin'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DealerDashboard />} />
                <Route path="/login" element={<DealerLogin />} />
                <Route path="/dashboard" element={<DealerDashboard />}>
                    <Route path="" element={<DealerCars />} />
                    <Route path="cars" element={<DealerCars />} />
                    <Route path="cars/:car" element={<Dashboard />} />
                    <Route path="account" element={<DealerAccount />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
