import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <nav>
            <ul style={{width: "30%"}}>
                {/* <li><Link to="/admin/allprojects">All Projects</Link></li> */}
                <li><Link to="/admin/allprojecttypes">All Project Types</Link></li>
                <li><Link to="/admin/alljobs">All Jobs</Link></li>
            </ul>
        </nav>
    )
}

export default AdminNavbar