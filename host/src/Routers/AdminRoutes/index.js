import React from 'react'
import { useState } from 'react'
import AdminContent from 'Admin/AdminContent'

const AdminRoutes = () => {
    const user = useState( state => state )
    console.log(user)

    return (
        <AdminContent />
    )
}

export default AdminRoutes