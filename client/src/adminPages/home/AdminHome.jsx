import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./adminhome.css";

const AdminHome = () => {
    const navigate = useNavigate();
    return (
        <div className='admin-home-container'>
            <div onClick={() => navigate("/admin/msds/allprojects")}>All Projects</div>
            <div onClick={() => navigate("/admin/msds/allblogs")}>All Blogs</div>
            <div onClick={() => navigate("/admin/msds/allprojecttypes")}>All Project Types</div>
            <div onClick={() => navigate("/admin/msds/addproject")}>Add Project</div>
            <div onClick={() => navigate("/admin/msds/addblog")}>Add Blog</div>
            <div onClick={() => navigate("/admin/msds/addprojecttype")}>Add Project Type</div>
        </div>
    )
}

export default AdminHome;