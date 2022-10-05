// import React from 'react';
// import "./addProjectType.scss";

// import axios from "axios";
// import baseUrl from "../../baseUrl"

// const AddProjectType = () => {
//     const createProjectType = (e) => {
//         e.preventDefault();
//         axios.post(`${baseUrl}/projecttype/create`, {name: e.target.name.value}).then((res) => {
//             if(res.data.status) {
//                 alert("created successfully");
//             }
//             else {
//                 alert(res.data.message);
//             }
//         }).catch((err) => {
//             alert(err.message);
//         })
//     }
//   return (
//     <div className='project-type-body'>
//     <div className="containers">
//         <form onSubmit={createProjectType}>
//             <p>Create Project Type</p>
//             <input type="text" placeholder="Project Type" id="name" name='name' /><br/>
//             <input type="submit" value="Create Project Type"/><br/>

//         </form>

//         <div className="drops">
//             <div className="drop drop-1"></div>
//             <div className="drop drop-2"></div>
//             <div className="drop drop-3"></div>
//             <div className="drop drop-4"></div>
//             <div className="drop drop-5"></div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default AddProjectType

import React from 'react'
import "./addProjectType.scss"

import axios from "axios";
import baseUrl from "../../baseUrl"

const AddProjectType = () => {
    const createProjectType = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/projecttype/create`, { name: e.target.name.value }).then((res) => {
            if (res.data.status) {
                alert("created successfully");
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
            <form onSubmit={createProjectType}>

                <div className="segment">
                    <h1>Create Project Type</h1>
                </div>

                <label>
                    <input type="text" placeholder="Name" id='name' className='name' required />
                </label>

                <button className="red" type="submit"> Create Project Type</button>

            </form>
        </div>
    )
}

export default AddProjectType
