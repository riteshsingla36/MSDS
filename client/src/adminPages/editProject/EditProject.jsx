import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../baseUrl';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import { Draggable } from "react-drag-reorder";

const EditJob = () => {
    const { projectId } = useParams();
    const [job, setJob] = useState({});
    const [types, setTypes] = useState([]);
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [newImgs, setNewImgs] = useState(null);

    useEffect(()  => {
        setProcessing(true);
        getProject(projectId);
    }, []);

    const getProject = (projectId) => {
        setProcessing(true);
        axios.get(`${baseUrl}/projects/${projectId}`).then(res => {
            if (res.data.status) {
                setJob(res.data.data);
                setNewImgs(res.data.data.images);
                axios
                .get(`${baseUrl}/projecttype`)
                .then((res) => {
                    if (res.data.status) {
                    setTypes(res.data.data);
                    } else {
                    alert(res.data.message);
                    }
                    setProcessing(false);
                })
                .catch((err) => {
                    alert(err.message);
                    setProcessing(false);
                });
            }
            else {
                alert("Error while fetching job information");
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.message);
            setProcessing(false);
        })
    }

    const editJob = (e) => {
        setProcessing(true);
        e.preventDefault();
        const name = e.target.name.value;
        const type = e.target.type.value;
        const description = e.target.description.value;
        const role_service = e.target.role_service.value;
        const awards_recognition = e.target.awards_recognition.value;
        const tag_line = e.target.tag_line.value;
        const images = e.target.images.files;
        const client_link = e.target.client_link.value;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("type", type);
        formData.append("description", description);
        formData.append("role_service", role_service);
        formData.append("awards_recognition", awards_recognition);
        formData.append("tag_line", tag_line);
        formData.append("client_link", client_link);

        if (type === "") {
            alert("please provide type");
            return;
        }

        if(!images){
            axios.patch(`${baseUrl}/projects/update/${projectId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              }).then(res => {
                if (res.data.status) {
                    alert("Project updated successfully");
                    navigate("/admin/msds/allprojects")
                }
                else {
                    alert("Error while fetching job information");
                }
                setProcessing(false);
            }).catch(err => {
                alert(err.message);
                setProcessing(false);
            })
        }else {
            for (var i = 0; i < images.length; i++) {
                formData.append("images", images[i], images[i].name);
            }
            console.log(name, role_service, description);
            axios.patch(`${baseUrl}/projects/update/${projectId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
              }).then(res => {
                if (res.data.status) {
                    alert("Project updated successfully");
                    navigate("/admin/msds/allprojects")
                }
                else {
                    alert("Error while fetching job information");
                }
                setProcessing(false);
            }).catch(err => {
                alert(err.message);
                setProcessing(false);
            })
        }
    }

    const getChangedPos = (currentPos, newPos) =>{
      let newImages = newImgs;
      const oldImage = newImages.splice(currentPos, 1)[0];
      newImages.splice(newPos, 0, oldImage);
      setNewImgs(newImages);
    }

    const onUpdateImagesLink = async (images) => {
      try {
        const res = await axios.patch(`${baseUrl}/projects/updateimages/${job._id}`, {
          images
        })
        if(!res.data.status){
          alert('Something Went wrong!');
          return;
        }
        alert('Update Images SuccessFully');
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    }

    const removeImage = async (image) => {
      let newImages = newImgs;
      let updatedImageArray = newImages.filter((img) => img !== image);
      setNewImgs(updatedImageArray);
      await onUpdateImagesLink(updatedImageArray);
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
            />: <form onSubmit={editJob}>

            <div className="segment">
                <h1>Edit Job</h1>
            </div>

            <label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        required
        defaultValue={job.name}
      />
    </label>

    <label>
      <input
        type="text"
        placeholder="Roles & Services"
        id="role_service"
        name="role_service"
        required
        defaultValue={job.role_service}

      />
    </label>

    <label>
      <input
        type="text"
        placeholder="Awards & Recognition"
        id="awards_recognition"
        name="awards_recognition"
        required
        defaultValue={job.awards_recognition}

      />
    </label>

    <label>
      <input
        type="text"
        placeholder="Tag Line"
        id="tag_line"
        name="tag_line"
        required
        defaultValue={job.tag_line}

      />
    </label>

    <label>
      <input
        type="text"
        placeholder="Client Website Link"
        id="client_link"
        name="client_link"
        required
        defaultValue={job.client_link}
      />
    </label>

    <label>
      <select name="type" id="type" required>
        <option value="" disabled hidden>
          Type
        </option>
        {types.map((type) => {
          return (
            <option key={type._id} value={type._id} selected={type.name === job.type.name ? `selected` : ``} >
              {type.name}
            </option>
          );
        })}
      </select>
    </label>

    <label>
      <textarea
        name="description"
        id="description"
        cols="10"
        rows="10"
        required
        defaultValue={job.description}
      />
    </label>
    <label>
      <input
        id="images"
        name="images"
        type="file"
        accept=".png, .jpg, .jpeg"
        multiple="multiple"
      />
    </label>

    <div className="flex-container">
    <div className="row" style={{
              display: 'flex',
              gap: '20px',
              flexDirection: "row",
              flexWrap: 'wrap',
      }}>
      <Draggable onPosChange={getChangedPos}>
        {newImgs?.map((word, idx) => (
            <div key={idx} style={{
              position: 'relative'
            }}>
              <img src={word} width={100} height={100} alt='Image'/>
              <div onClick={() => {removeImage(word)}} style={{
                position: 'absolute',
                top: 0,
                color: 'red',
                fontSize: '20px',
                cursor: 'pointer'
              }}>X</div>
            </div>
          )
        )}
      </Draggable>

      <button className="red" onClick={() => {onUpdateImagesLink(newImgs)}} type='button'>
        <i className="icon icon-md-lock"></i> Update Images
      </button>

    </div>
  </div>

    <button className="red" type="submit">
      <i className="icon ion-md-lock"></i> Edit Project
    </button>

        </form>}
            
        </div>
    )
}

export default EditJob