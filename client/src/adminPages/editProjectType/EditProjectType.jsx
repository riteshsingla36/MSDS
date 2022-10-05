import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../baseUrl';

const EditProjectType = () => {
    const {projectTypeId} = useParams();
    const [projectType, setProjectType] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${baseUrl}/projecttype/${projectTypeId}`).then(res => {
            if(res.data.status) {
                setProjectType(res.data.data);
            }
            else {
                alert("Error while fetching project type information")
            }
        }).catch(err => {
            alert(err.message);
        })
    },[projectTypeId])

    const editProjectType = (e) => {
        e.preventDefault();
        axios.patch(`${baseUrl}/projecttype/update/${projectTypeId}`, { name: e.target.name.value }).then((res) => {
            if (res.data.status) {
                alert("updated successfully");
                navigate("/admin/allprojecttypes");
            }
            else {
                alert(res.data.message);
            }
        }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div className="test">
            <form onSubmit={editProjectType}>

                <div className="segment">
                    <h1>Create Project Type</h1>
                </div>

                <label>
                    <input type="text" placeholder="Name" id='name' className='name' defaultValue={projectType.name} required />
                </label>

                <button className="red" type="submit"> Create Project Type</button>

            </form>
        </div>
    )
}

export default EditProjectType