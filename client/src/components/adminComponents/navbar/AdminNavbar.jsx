import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import baseUrl from '../../../baseUrl';

const AdminNavbar = () => {

    const logout = () => {
        axios.get(`${baseUrl}/onboarding/logout`);
    }

    return (
        <nav>
            <ul style={{width: "30%"}}>
                {/* <li><Link to="/admin/allprojects">All Projects</Link></li> */}
                <li><Link to="/admin/allprojecttypes">All Project Types</Link></li>
                <li><Link to="/admin/alljobs">All Jobs</Link></li>
                <li><Link to='/admin/addprojecttype'>Add Type</Link></li>
                <li><Link to='/admin/addproject'>Add Project</Link></li>
                <li><Link to='/admin/addjob'>Add Job</Link></li>
                <li><Link onClick={logout}>Log Out</Link></li>
            </ul>
        </nav>
    )
}

export default AdminNavbar