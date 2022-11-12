import React, { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const AddProject = () => {
  const [types, setTypes] = useState([]);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setProcessing(true);
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
  }, []);

  const createProject = (e) => {
    setProcessing(true);
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const role_service = e.target.role_service.value;
    const awards_recognition = e.target.awards_recognition.value;
    const images = e.target.images.files;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("role_service", role_service);
    formData.append("awards_recognition", awards_recognition);

    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i], images[i].name);
    }

    if (type === "") {
      alert("please provide name");
      return;
    }

    axios
      .post(`${baseUrl}/projects/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.status) {
          alert("project created successfully");
          e.target.name.value = "";
          e.target.type.value = "";
          e.target.description.value = "";
          e.target.role_service.value = "";
          e.target.awards_recognition.value = "";
          e.target.images.value = "";
        } else {
          alert(res.data.message);
        }
        setProcessing(false);
      })
      .catch((err) => {
        alert(err.message);
        setProcessing(false);
      });
  };

  return (
    <div className="test">
      {processing ? (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      ) : (
        <></>
      )}
      <form onSubmit={createProject}>
        <div className="segment">
          <h1>Add Project</h1>
        </div>

        <label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="Roles & Services"
            id="role_service"
            name="role_service"
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="Awards & Recognition"
            id="awards_recognition"
            name="awards_recognition"
            required
          />
        </label>

        <label>
          <select name="type" id="type" defaultValue="" required>
            <option value="" disabled hidden>
              Type
            </option>
            {types.map((type) => {
              return (
                <option key={type._id} value={type._id}>
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
          />
        </label>

        <label>
          <input
            id="images"
            name="images"
            type="file"
            accept=".png, .jpg, .jpeg"
            multiple="multiple"
            required
          />
        </label>

        <button className="red" type="submit">
          <i className="icon ion-md-lock"></i> Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
