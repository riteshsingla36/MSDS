import React from 'react';
import axios from 'axios';
import baseUrl from '../../baseUrl';

const AddJob = () => {
    const createJob = (e) => {
        e.preventDefault();
        const postName = e.target.postName.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const startDate = e.target.startDate.value;
        const salary = e.target.salary.value;

        axios.post(`${baseUrl}/careers/create`, { postName, location, description, salary, startDate })
            .then(res => {
                if (res.data.status) {
                    alert("job created successfully");
                    e.target.postName.value = "";
                    e.target.location.value = "";
                    e.target.description.value = "";
                    e.target.startDate.value = "";
                    e.target.salary.value = "";
                }
                else {
                    alert(res.data.message);
                }
            }).catch(err => {
                alert(err.message);
            })
    }

    return (
        <div className="test">
            <form onSubmit={createJob}>

                <div className="segment">
                    <h1>Add Job</h1>
                </div>

                <label>
                    <input type="text" placeholder="Post Name" id='postName' name='postName' required />
                </label>

                <label>
                    <input type="text" placeholder="location" id='location' name='location' required />
                </label>

                <label>
                    <textarea name="description" id="description" cols="10" rows="10" required />
                </label>

                <label>
                    <input type="text" placeholder="Start Date" id='startDate' name='startDate' required />
                </label>

                <label>
                    <input type="text" placeholder="Salary" id='salary' name='salary' required />
                </label>

                <button className="red" type="submit"><i className="icon ion-md-lock"></i> Add Job</button>

            </form>
        </div>
    )
}

export default AddJob
