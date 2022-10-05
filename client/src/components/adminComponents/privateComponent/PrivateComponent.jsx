import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../navbar/AdminNavbar'

const PrivateComponent = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}

export default PrivateComponent