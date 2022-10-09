// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import baseUrl from '../../baseUrl';
// import "./addProject.scss";

// const AddProject = () => {
//     const [types, setTypes] = useState([]);
//     const [projectImages, setProjectImages] = useState([]);

//     useEffect(() => {
//         axios.get(`${baseUrl}/projecttype`).then(res => {
//             if (res.data.status) {
//                 setTypes(res.data.data);
//             }
//             else {
//                 alert(res.data.message);
//             }
//         }).catch(err => {
//             alert(err.message);
//         });
//     }, [])

//     const updateImages = (e) => {
//         const images = e.target.files;
//         for (let image of images) {
//             if (image.size > 1000000) {
//                 e.target.value = "";
//                 alert("image size can not be greater than 1000000");
//                 return;
//             }
//         }
//         setProjectImages(images);
//     }

//     const createProject = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const type = e.target.type.value;
//         const description = e.target.description.value;
//         const role_service = e.target.role_service.value;
//         const awards_recognition = e.target.awards_recognition.value;
//         const image = projectImages;
//         const formData = new FormData();

//         formData.append("name", name);
//         formData.append("type", type);
//         formData.append("description", description);
//         formData.append("role_service", role_service);
//         formData.append("awards_recognition", awards_recognition);
//         formData.append("image", image);
//         axios.post(`${baseUrl}/project/create`, formData)
//             .then(res => {
//                 if (res.data.status) {
//                     alert("project created successfully");
//                 }
//                 else {
//                     alert(res.data.message);
//                 }
//             }).catch(err => {
//                 alert(err.message);
//             })
//     }
//     return (
//         <div className='project-type-body'>
//             <div className="containers">
//                 <form onSubmit={createProject}>
//                     <p>Add Project</p>
//                     <input type="text" placeholder="Project Name" id="name" name='name' /><br />

//                     <textarea name="description" id="description" cols="10" rows="1" /><br />

//                     <select name="type" id="type">
//                         <option value=""></option>
//                         {types.map(type => {
//                             return <option key={type._id} value={type._id}>{type.name}</option>;
//                         })}
//                     </select><br />

//                     <input type="text" placeholder="Role & Service" id="role_service" name='role_service' /><br />

//                     <input type="text" placeholder="Awards & Recognition" id="awards_recognition" name='awards_recognition' /><br />

//                     <input id="images" name="images" type="file" accept=".png, .jpg, .jpeg" multiple="multiple" onChange={e => updateImages(e)} required /><br />

//                     <input type="submit" value="Create Project" /><br />
//                 </form>

//                 <div className="drops">
//                     <div className="drop drop-1"></div>
//                     <div className="drop drop-2"></div>
//                     <div className="drop drop-3"></div>
//                     <div className="drop drop-4"></div>
//                     <div className="drop drop-5"></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddProject


import React, { useEffect, useState } from 'react'
import baseUrl from '../../baseUrl'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner';

const AddProject = () => {
    const [types, setTypes] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        setProcessing(true);
        axios.get(`${baseUrl}/projecttype`).then(res => {
            if (res.data.status) {
                setTypes(res.data.data);
            }
            else {
                alert(res.data.message);
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.message);
            setProcessing(false);
        });
    }, [])

    const updateImages = (e) => {
        setProcessing(true);
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (file.size > 1000000) {
                e.target.value = "";
                alert("image size can not be greater than 1MB");
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProjectImages(oldArray => [...oldArray, reader.result])
            }
        })
        setProcessing(false);
    }

    const createProject = (e) => {
        setProcessing(true);
        e.preventDefault();
        const name = e.target.name.value;
        const type = e.target.type.value;
        const description = e.target.description.value;
        const role_service = e.target.role_service.value;
        const awards_recognition = e.target.awards_recognition.value;
        const images = projectImages;

        if (type === "") {
            alert("please provide name");
            return;
        }

        axios.post(`${baseUrl}/projects/create`, { name: name, description: description, type: type, role_service: role_service, awards_recognition: awards_recognition, images: images })
            .then(res => {
                if (res.data.status) {
                    alert("project created successfully");
                    e.target.name.value = "";
                    e.target.type.value = "";
                    e.target.description.value = "";
                    e.target.role_service.value = "";
                    e.target.awards_recognition.value = "";
                    e.target.images.value = "";
                }
                else {
                    alert(res.data.message);
                }
                setProcessing(false);
            }).catch(err => {
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
            <form method="post" encType="multipart/form-data" onSubmit={createProject}>

                <div className="segment">
                    <h1>Add Project</h1>
                </div>

                <label>
                    <input type="text" placeholder="Name" id='name' name='name' required />
                </label>

                <label>
                    <input type="text" placeholder="Roles & Services" id='role_service' name='role_service' required />
                </label>

                <label>
                    <input type="text" placeholder="Awards & Recognition" id='awards_recognition' name='awards_recognition' required />
                </label>

                <label>
                    <select name="type" id="type" defaultValue="" required>
                        <option value="" disabled hidden>Type</option>
                        {types.map(type => {
                            return <option key={type._id} value={type._id}>{type.name}</option>;
                        })}
                    </select>
                </label>

                <label>
                    <textarea name="description" id="description" cols="10" rows="10" required />
                </label>

                <label>
                    <input id="images" name="images" type="file" accept=".png, .jpg, .jpeg" multiple="multiple" onChange={e => updateImages(e)} required />
                </label>

                <button className="red" type="submit"><i className="icon ion-md-lock"></i> Add Project</button>

            </form>
        </div>
    )
}

export default AddProject
