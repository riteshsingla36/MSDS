import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './blog.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';
import Footer from '../../components/footer/Footer';

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {

    if (blogId) {
      axios.get(`${baseUrl}/blogs/${blogId}`).then(res => {
        if (res.data.status) {
          setBlog(res.data.data)
        }
        else {
          alert("Error while fetching blog details");
        }
      }).catch(err => {
        alert("Error while fetching blog details", err.message);
      })
    }
  }, [blogId]);

  return (
    <>
      <Navbar />
      <div className='upper_div'>
        {
          blog && <>
            {/* <div className='blog_header_image' style={{backgroundImage: `url(${blog.images[0]})`}} onClick={() => navigate('/projects/all')}></div> */}
            <div className="image-container">
              <img src={blog.images[0]} alt={blog.title} onClick={() => navigate('/projects/all')}/>
            </div>
            <div className='blog_content'>
              <p className="para_main" id='description' dangerouslySetInnerHTML={{ __html: blog.description }} />
              <div id='headerContent' dangerouslySetInnerHTML={{ __html: blog.headerContent }} />
              <div className='image-container' style={{marginTop: '30px'}}>
                <img src={blog.images[1]} alt={blog.title} onClick={() => navigate('/projects/all')} />
              </div>
              <div style={{ display: "grid", columnGap: "40px", alignItems: 'center', justifyContent: 'center', gridTemplateColumns: 'repeat(2, 1fr)', marginTop: "15px" }}>
                {
                  blog.images.map((image, index) => {
                    if (index > 1) {
                      return <div className='image-container' style={{marginBottom: '0px'}}>
                        <img src={image} key={index} alt={blog.title} onClick={() => navigate('/projects/all')}/>
                      </div>
                    }
                    return <div key={index}></div>
                  })
                }

              </div>

              <div id='content' dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </>
        }
      </div>
      <Footer />
    </>
  );
}

export default Blog