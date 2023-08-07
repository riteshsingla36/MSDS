import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import baseUrl from '../../baseUrl';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import { Draggable } from "react-drag-reorder";

const EditBlog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [newImgs, setNewImgs] = useState(null);

  useEffect(() => {
    setProcessing(true);
    getBlog(blogId);
  }, []);

  const getBlog = (blogId) => {
    setProcessing(true);
    axios.get(`${baseUrl}/blogs/${blogId}`).then(res => {
      if (res.data.status) {
        setBlog(res.data.data);
        setNewImgs(res.data.data.images);
      }
      else {
        alert("Error while fetching blog.");
      }
      setProcessing(false);
    }).catch(err => {
      alert(err.message);
      setProcessing(false);
    })
  }

  const editBlog = (e) => {
    setProcessing(true);
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const headerContent = e.target.headerContent.value;
    const description = e.target.description.value;
    const images = e.target.images.files;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("headerContent", headerContent);
    formData.append("description", description);

    if (!images) {
      axios.patch(`${baseUrl}/blogs/update/${blogId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then(res => {
        if (res.data.status) {
          alert("Blog updated successfully");
          navigate("/admin/msds/allblogs")
        }
        else {
          alert("Error while fetching blog.");
        }
        setProcessing(false);
      }).catch(err => {
        alert(err.message);
        setProcessing(false);
      })
    } else {
      for (var i = 0; i < images.length; i++) {
        formData.append("images", images[i], images[i].name);
      }
      axios.patch(`${baseUrl}/blogs/update/${blogId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then(res => {
        if (res.data.status) {
          alert("Blog updated successfully");
          navigate("/admin/msds/allblogs")
        }
        else {
          alert("Error while fetching blog.");
        }
        setProcessing(false);
      }).catch(err => {
        alert(err.message);
        setProcessing(false);
      })
    }
  }

  const getChangedPos = (currentPos, newPos) => {
    let newImages = newImgs;
    const oldImage = newImages.splice(currentPos, 1)[0];
    newImages.splice(newPos, 0, oldImage);
    setNewImgs(newImages);
  }

  const onUpdateImagesLink = async (images) => {
    try {
      const res = await axios.patch(`${baseUrl}/blogs/updateimages/${blog._id}`, {
        images
      })
      if (!res.data.status) {
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
      /> : <form onSubmit={editBlog}>

        <div className="segment">
          <h1>Edit Blog</h1>
        </div>

        <label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            required
            defaultValue={blog.title}
          />
        </label>

        <label>
          <textarea
            placeholder="Description"
            id="description"
            name="description"
            required
            cols="10"
            rows="10"
            defaultValue={blog.description}

          />
        </label>

        <label>
          <textarea
            placeholder="Header Content"
            id="headerContent"
            name="headerContent"
            cols="10"
            rows="10"
            required
            defaultValue={blog.headerContent}

          />
        </label>

        <label>
          <textarea
            placeholder="Content"
            id="content"
            name="content"
            cols="10"
            rows="10"
            required
            defaultValue={blog.content}
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
            {newImgs && newImgs.length > 0 && <Draggable onPosChange={getChangedPos}>
              {newImgs?.map((word, idx) => (
                <div key={idx} style={{
                  position: 'relative'
                }}>
                  <img src={word} width={100} height={100} alt='Image' />
                  <div onClick={() => { removeImage(word) }} style={{
                    position: 'absolute',
                    top: 0,
                    color: 'red',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}>X</div>
                </div>
              )
              )}
            </Draggable>}

            <button className="red" onClick={() => { onUpdateImagesLink(newImgs) }} type='button'>
              <i className="icon icon-md-lock"></i> Update Images
            </button>

          </div>
        </div>

        <button className="red" type="submit">
          <i className="icon ion-md-lock"></i> Edit Blog
        </button>

      </form>}

    </div>
  )
}

export default EditBlog