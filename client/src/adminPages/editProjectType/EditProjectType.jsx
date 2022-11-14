import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../baseUrl';
import { TailSpin } from 'react-loader-spinner';

const EditProjectType = () => {
    const {projectTypeId} = useParams();
    const [projectType, setProjectType] = useState({});
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        setProcessing(true);
        axios.get(`${baseUrl}/projecttype/${projectTypeId}`).then(res => {
            if(res.data.status) {
                setProjectType(res.data.data);
            }
            else {
                alert("Error while fetching project type information")
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.message);
            setProcessing(false);
        })
    },[projectTypeId])

    const editProjectType = (e) => {
        setProcessing(true);
        e.preventDefault();
        axios.patch(`${baseUrl}/projecttype/update/${projectTypeId}`, { name: e.target.name.value }).then((res) => {
            if (res.data.status) {
                alert("updated successfully");
                navigate("/admin/msds/allprojecttypes");
            }
            else {
                alert(res.data.message);
            }
            setProcessing(false);
        }).catch((err) => {
            alert(err.message);
            setProcessing(false);
        })
    }
    return (
        <div className="test">
            {processing ? <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="loader"
            />: <></>}
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