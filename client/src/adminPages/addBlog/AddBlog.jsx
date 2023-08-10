import React, { useState } from "react";
import baseUrl from "../../baseUrl";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const AddBlog = () => {
  const [processing, setProcessing] = useState(false);

  const createBlog = (e) => {
    setProcessing(true);
    e.preventDefault();
    const title = e.target.title.value;
    const slug = e.target.slug.value;
    const description = e.target.description.value;
    const content = e.target.content.value;
    const headerContent = e.target.headerContent.value;
    const images = e.target.images.files;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("headerContent", headerContent);
    formData.append("description", description);

    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i], images[i].name);
    }

    axios
      .post(`${baseUrl}/blogs/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.data.status) {
          alert("blog created successfully");
          e.target.title.value = "";
          e.target.slug.value = "";
          e.target.content.value = "";
          e.target.headerContent.value = "";
          e.target.description.value = "";
          e.target.images.value = "";
        } else {
          alert(res.data.message);
        }
        setProcessing(false);
      })
      .catch((err) => {
        console.log(err);
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
      <form onSubmit={createBlog}>
        <div className="segment">
          <h1>Add Blog</h1>
        </div>

        <label>
          <input
            type="text"
            placeholder="Slug"
            id="slug"
            name="slug"
            required
          />
        </label>
        
        <label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            required
          />
        </label>

        <label>
          <textarea
            placeholder="Description"
            id="description"
            name="description"
            cols="10"
            rows="10"
            required
          />
        </label>

        <label>
          <textarea
            placeholder="Header Content"
            id="headerContent"
            name="headerContent"
            cols="10"
            rows="10"
            defaultValue='<h4 class="heading_main"></h4><p class="para_main"></p>'
            required
          />
        </label>
        
        <label>
          <textarea
            placeholder="Content"
            id="content"
            name="content"
            cols="10"
            rows="10"
            defaultValue='<h4 class="heading_main"></h4><p class="para_main"></p><h4 class="heading_main"></h4><p class="para_main"></p>'
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
          <i className="icon ion-md-lock"></i> Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
