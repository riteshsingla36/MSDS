import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../baseUrl';

const AllProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = () => {
        setProcessing(true);
        axios.get(`${baseUrl}/projects`).then(result => {
            if (result.data.status) {
                setAllProjects(result.data.data);
            }
            else {
                alert("Error occured while fetching jobs");
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.messsage);
            setProcessing(false);
        })
    }

    const deleteJob = (projectsId) => {
        setProcessing(true);
        axios.delete(`${baseUrl}/projects/delete/${projectsId}`).then((res) => {
            alert("Project deleted successfully");
            getAllJobs();
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
                            Role & Services
                        </div>
                        <div className="cell">
                            Awards & Recognition
                        </div>
                        <div className="cell">
                            Type
                        </div>
                        <div className="cell">
                            TagLine
                        </div>
                        <div className="cell">
                            Edit
                        </div>
                        <div className="cell">
                            Delete
                        </div>
                    </div>

                    {
                        allProjects.map(job => {
                            return <div className="row" key={job._id}>
                                <div className="cell" data-title="Post">
                                    {job.name}
                                </div>
                                <div className="cell" data-title="Location">
                                    {job.role_service}
                                </div>
                                <div className="cell" data-title="Start Date">
                                    {job.awards_recognition}
                                </div>
                                <div className="cell" data-title="Salary">
                                    {job.type.name}
                                </div>
                                <div className="cell" data-title="Salary">
                                    {job.tag_line}
                                </div>
                                <div className="cell" data-title="Edit">
                                    <span onClick={() => navigate(`/admin/editproject/${job._id}`)}>Edit</span>
                                </div>
                                <div className="cell" data-title="Delete">
                                    <span onClick={() => deleteJob(job._id)}>Delete</span>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>
        </div>
  )
}

export default AllProjects