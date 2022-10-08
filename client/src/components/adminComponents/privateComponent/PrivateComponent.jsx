import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../navbar/AdminNavbar'
// import { useEffect } from 'react';

const PrivateComponent = () => {

    const auth = document.cookie?.split('; ')?.find((row) => row.startsWith('email'))?.split('=')[1];
    console.log(auth);

    return (
        <div>
            {auth ? (
                <>
                <AdminNavbar />
                <Outlet />
                </>
            ) : (
                <Navigate to="/admin/login" />
            )}
        </div>

        // <>
        //     <AdminNavbar />
        //     <Outlet />
        // </>
    )
}

export default PrivateComponent