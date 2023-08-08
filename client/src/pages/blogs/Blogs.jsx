import React, { useEffect, useState } from 'react'
import './blogs.css'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import baseUrl from '../../baseUrl'
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${baseUrl}/blogs`).then(res => {
      if (res.data.status) {
        setBlogs(res.data.data)
      }
      else {
        alert("Error while fetching blogs");
      }
    }).catch(err => {
      alert("Error while fetching blogs", err.message);
    })
  }, [])
  return (
    <>
      <Navbar />
      <div style={{ paddingInline: '100px', paddingTop: "80px" }}>
        {blogs && blogs.length > 0 &&
          blogs.map(blog => (
            <div key={blog._id} style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', gap: '80px', marginBottom: '50px' }}>
              <div>
                <img src={blog.images[0]} alt={blog.title} style={{ height: "300px", width: '500px' }} />
              </div>
              <div>
                <h3 className='blogs_head' onClick={() => navigate(`/blog/${blog._id}`)}>{blog.title}</h3>
                <p className="blogs_para">
                  {blog.description}
                </p>

                <Link className='blogs_read' to={`/blog/${blog._id}`}>
                  Read More
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Blogs