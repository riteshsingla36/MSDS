import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./adminhome.css";

const AdminHome = () => {
    const navigate = useNavigate();
    return (
        <div className='admin-home-container'>
            <div onClick={() => navigate("/admin/alljobs")}>All Jobs</div>
            <div onClick={() => navigate("/admin/allprojects")}>All Projects</div>
            <div onClick={() => navigate("/admin/allprojecttypes")}>All Project Types</div>
            <div onClick={() => navigate("/admin/addjob")}>Add Job</div>
            <div onClick={() => navigate("/admin/addproject")}>Add Project</div>
            <div onClick={() => navigate("/admin/addprojecttype")}>Add Project Type</div>
        </div>
    )
}

export default AdminHome;