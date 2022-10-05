import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../baseUrl';
import axios from 'axios';

const EditJob = () => {
    const {jobId} = useParams();
    const [job, setJob] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getJob(jobId);
    }, [jobId]);

    const getJob = (jobId) => {
        axios.get(`${baseUrl}/careers/${jobId}`).then(res => {
            if(res.data.status) {
                setJob(res.data.data);
            }
            else {
                alert("Error while fetching job information");
            }
        }).catch(err => {
            alert(err.message);
        })
    }

    const editJob = (e) => {
        e.preventDefault();
        const postName = e.target.postName.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const startDate = e.target.startDate.value;
        const salary = e.target.salary.value;

        axios.patch(`${baseUrl}/careers/update/${jobId}`, { postName, location, description, salary, startDate }).then(res => {
            if(res.data.status) {
                alert("job updated successfully");
                navigate("/admin/alljobs")
            }
            else {
                alert("Error while fetching job information");
            }
        }).catch(err => {
            alert(err.message);
        })
    }
  return (
    <div className="test">
            <form onSubmit={editJob}>

                <div className="segment">
                    <h1>Edit Job</h1>
                </div>

                <label>
                    <input type="text" placeholder="Post Name" id='postName' name='postName' defaultValue={job.postName} required />
                </label>

                <label>
                    <input type="text" placeholder="location" id='location' name='location' defaultValue={job.location} required />
                </label>

                <label>
                    <textarea name="description" id="description" cols="10" rows="10" defaultValue={job.description} required />
                </label>

                <label>
                    <input type="text" placeholder="Start Date" id='startDate' name='startDate' defaultValue={job.startDate} required />
                </label>

                <label>
                    <input type="text" placeholder="Salary" id='salary' name='salary' defaultValue={job.salary} required />
                </label>

                <button className="red" type="submit"><i className="icon ion-md-lock"></i>Edit Job</button>

            </form>
        </div>
  )
}

export default EditJob