import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import baseUrl from '../../baseUrl';
import axios from "axios";
import { TailSpin } from 'react-loader-spinner';

const AllProjectTypes = () => {
    const navigate = useNavigate();
    const [projectTypes, setProjectTypes] = useState([]);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        getAllProjectTypes();
    },[])

    const getAllProjectTypes = () => {
        setProcessing(true);
        axios.get(`${baseUrl}/projecttype`).then(res => {
            if(res.data.status) {
                setProjectTypes(res.data.data);
            }
            else {
                alert("Error while fetching project types");
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.message);
            setProcessing(false);
        })
    }

    const deleteProjectType = (id) =>{
        setProcessing(true);
        axios.delete(`${baseUrl}/projecttype/delete/${id}`).then((res) => {
            alert("Project Type deleted successfully");
            getAllProjectTypes();
            setProcessing(false);
        }).catch(err => {
            alert(err.messsage);
            setProcessing(false);
        })

    }
  return (
    <div className="test1">
        {processing ? <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="loader"
            />: <></>}
            <div className="wrapper">

                <div className="table">

                    <div className="row header">
                        <div className="cell">
                            Name
                        </div>
                        <div className="cell">
                            Created At
                        </div>
                        
                        <div className="cell">
                            Edit
                        </div>
                        <div className="cell">
                            Delete
                        </div>
                    </div>

                    {
                        projectTypes.map(projectType => {
                            return <div className="row" key={projectType._id}>
                                <div className="cell" data-title="Name">
                                    {projectType.name}
                                </div>
                                <div className="cell" data-title="Created At">
                                    {projectType.createdAt}
                                </div>
                                <div className="cell" data-title="Edit">
                                    <span onClick={() => navigate(`/admin/msds/editprojecttype/${projectType._id}`)}>Edit</span>
                                </div>
                                <div className="cell" data-title="Delete">
                                    <span onClick={() => deleteProjectType(projectType._id)}>Delete</span>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>
        </div>
  )
}

export default AllProjectTypes