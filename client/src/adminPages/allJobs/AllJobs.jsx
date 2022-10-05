import React, { useState } from 'react';
import { useEffect } from 'react';
import baseUrl from '../../baseUrl';
import axios from "axios";
import "./allJobs.sass";
import { useNavigate } from 'react-router-dom';

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = () => {
        axios.get(`${baseUrl}/careers`).then(result => {
            if (result.data.status) {
                setAllJobs(result.data.data);
            }
            else {
                alert("Error occured while fetching jobs");
            }
        }).catch(err => {
            alert(err.messsage);
        })
    }

    const deleteJob = (jobId) => {
        axios.delete(`${baseUrl}/careers/delete/${jobId}`).then((res) => {
            alert("Job deleted successfully");
            getAllJobs();
        }).catch(err => {
            alert(err.messsage);
        })
    }

    return (
        <div className="test1">
            <div className="wrapper">

                <div className="table">

                    <div className="row header">
                        <div className="cell">
                            Post
                        </div>
                        <div className="cell">
                            Location
                        </div>
                        <div className="cell">
                            Start Date
                        </div>
                        <div className="cell">
                            Salary
                        </div>
                        <div className="cell">
                            Edit
                        </div>
                        <div className="cell">
                            Delete
                        </div>
                    </div>

                    {
                        allJobs.map(job => {
                            return <div className="row" key={job._id}>
                                <div className="cell" data-title="Post">
                                    {job.postName}
                                </div>
                                <div className="cell" data-title="Location">
                                    {job.location}
                                </div>
                                <div className="cell" data-title="Start Date">
                                    {job.startDate}
                                </div>
                                <div className="cell" data-title="Salary">
                                    {job.salary}
                                </div>
                                <div className="cell" data-title="Edit">
                                    <span onClick={() => navigate(`/admin/editjob/${job._id}`)}>Edit</span>
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

export default AllJobs