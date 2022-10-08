import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../navbar/AdminNavbar'
// import { useEffect } from 'react';

const PrivateComponent = () => {

    const auth = document.cookie?.split('; ')?.find((row) => row.startsWith('email'))?.split('=')[1];

    return (
        <>
            {auth ? (
                <>
                <AdminNavbar />
                <Outlet />
                </>
            ) : (
                <Navigate to="/admin/login" />
            )}
        </>

    )
}

export default PrivateComponent