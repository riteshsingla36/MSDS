import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './blog.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseUrl from '../../baseUrl';
import Footer from '../../components/footer/Footer';
function createReactElementsFromHTML(htmlString, id) {
  const temporaryElement = document.getElementById(id);
  if (temporaryElement) {
    temporaryElement.innerHTML = htmlString;
  }
}

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (blogId) {
      axios.get(`${baseUrl}/blogs/${blogId}`).then(res => {
        if (res.data.status) {
          setBlog(res.data.data)
          createReactElementsFromHTML(res.data.data.description, 'description')
          createReactElementsFromHTML(res.data.data.headerContent, 'headerContent')
          createReactElementsFromHTML(res.data.data.content, 'content')
        }
        else {
          alert("Error while fetching blog details");
        }
      }).catch(err => {
        alert("Error while fetching blog details", err.message);
      })
    }
  }, []);

  return (
    <div style={{ padding: '50px 20px 0px 20px', fontSize: '10rem', color: 'black' }}>
      <Navbar />
      {
        blog && <>
          <img src={blog.images[0]} alt="" style={{ width: "100%", height: "300px", marginBottom: "40px" }} />
          <div style={{ width: "70%", marginBottom: "50px" }}>
            <p className="para_main" id='description'>
            </p>
            <div id='headerContent'></div>

            <div style={{display: "flex", gap: "40px", flexWrap: "wrap", marginTop: "15px"}}>
              {
                blog.images.map((image, index) => {
                  if(index !== 0) {
                    return <img src={image} style={{flex: 1, height: "200px"}} key={index} alt={blog.title}/>
                  }
                  return <></>
                })
              }

            </div>

            <div id='content'></div>
          </div>
        </>
      }
      <Footer/>
    </div>
  );
}

export default Blog