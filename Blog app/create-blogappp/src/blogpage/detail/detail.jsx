
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./index.scss";
import axios from "axios";
import { Helmet } from "react-helmet";
// import { Helmet } from "react-helmet";



const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/blogs/${id}`)
      .then((response) => setBlog(response.data));
  },[]);

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:8000/blogs/${e.target.id}`)
      .then((response) => setBlog(response.data))
      .then(() => navigate("/homecom:id"));
  };

  return (
    <div id="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog.title}</title>
        <link rel="canonical" href="http://detail.com" />
      </Helmet>

      <div >
        <h2> title: {blog.title}</h2>
        
{/* <h3>body: {blog.body}</h3> */}
        <p>
author:
          {blog.author}
        </p>
        <div >
          <button
            id={blog.id}
            onClick={(e) => handleDelete(e)}
            className="deleteBtn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;