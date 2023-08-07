/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../baseUrl';

const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = () => {
        setProcessing(true);
        axios.get(`${baseUrl}/blogs`).then(result => {
            if (result.data.status) {

                setAllBlogs(result.data.data);
            }
            else {
                alert("Error occured while fetching blogs");
            }
            setProcessing(false);
        }).catch(err => {
            alert(err.messsage);
            setProcessing(false);
        })
    }

    const deleteBlog = (blogId) => {
        const answer = confirm(`Are you sure you want to delete this blog?`);
        if (answer) {
            setProcessing(true);
            axios.delete(`${baseUrl}/blogs/delete/${blogId}`).then((res) => {
                alert("Blog deleted successfully");
                getAllBlogs();
                setProcessing(false);
            }).catch(err => {
                alert(err.messsage);
                setProcessing(false);
            })
        }
    }

    return (
        <div className="test1">
            {processing ? <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="loader"
            /> : <></>}
            <div className="wrapper">

                <div className="table">

                    <div className="row header">
                        <div className="cell">
                            Title
                        </div>
                        <div className="cell">
                            Edit
                        </div>
                        <div className="cell">
                            Delete
                        </div>
                    </div>

                    {
                        allBlogs.map(blog => {
                            return <div className="row" key={blog._id}>
                                <div className="cell" data-title="Post">
                                    {blog.title}
                                </div>
                                <div className="cell" data-title="Edit">
                                    <span onClick={() => navigate(`/admin/msds/editblog/${blog._id}`)}>Edit</span>
                                </div>
                                <div className="cell" data-title="Delete">
                                    <span onClick={() => deleteBlog(blog._id)}>Delete</span>
                                </div>
                            </div>
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default AllBlogs