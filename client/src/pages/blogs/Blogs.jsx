import React, { useEffect, useState } from 'react'
import './blogs.css'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import baseUrl from '../../baseUrl'
import { Link, useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer';

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
      <div className='blogs_div'>
        {/* //add heading  */}
        {blogs && blogs.length > 0 &&
          blogs.map(blog => (
            <div key={blog._id} className='blogs_all'>
              <div className='div_img'  onClick={() => navigate(`/blog/${blog.slug}`)}>
                <img src={blog.images[0]} alt={blog.title} />
              </div>
              <div style={{flex: 1}}>
                <h3 className='blogs_head' onClick={() => navigate(`/blog/${blog.slug}`)}>{blog.title}</h3>
                <p className="blogs_para">
                  {blog.description}
                </p>

                <Link className='blogs_read' to={`/blog/${blog.slug}`}>
                  Read More
                </Link>
              </div>
            </div>
          ))
        }
      </div>
      <Footer/>
    </>
  )
}

export default Blogs