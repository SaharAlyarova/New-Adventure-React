


import React from "react";
import "../../layouts/header/index.scss";
import { Helmet } from "react-helmet";
import { blogValidationSchema } from "../blogfrm/shema/index";
import { useFormik } from "formik";
import axios from "axios";
const BlogCom = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        title: "",
        body: "",
        author: "",
      },
      validationSchema: blogValidationSchema,
      onSubmit: (values) => {
        axios.post("http://localhost:8000/blogs", values);
      },
    });

  return (
    <div id="form">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Page</title>
        <link rel="canonical" href="http://create-blogappp.com" />
      </Helmet>
      <h3 className="h3">Add a New Blog</h3>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <p>
              <label htmlFor="title">Blog title:</label>
            </p>
            <input
              onChange={handleChange}
              value={values.title}
              type="text"
              name="title"
              id="title"
            />
            {errors.title && touched.title && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.title}
              </div>
            )}
          </div>
          <div className="input-control">
            <p>
              <label htmlFor="body">Blog body:</label>
            </p>
            <textarea
              onChange={handleChange}
              value={values.body}
              name="body"
              id="body"
              cols="40"
              rows="2"
            ></textarea>
            {errors.body && touched.body && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.body}
              </div>
            )}
          </div>
          <div className="select-author">
            <p>
              <label htmlFor="select">Blog author:</label>
            </p>
            <select
              onChange={handleChange}
              value={values.blogAuthor}
              name="author"
              id="author"
            >
              <option value="" selected disabled>
                author
              </option>
              <option value="Qurban m.">Qurban m.</option>
              <option value="shr">Shr</option>
              <option value="Kenan m.">Kenan m.</option>
            </select>
            {errors.author && touched.author && (
              <div
                style={{
                  color: "red",
                  fontSize: "12px",
                  margin: "5px 0 5px 3px",
                }}
              >
                {errors.author}
              </div>
            )}
          </div>
          <div className="btn">
            <button type="submit" className="redbtn">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BlogCom;
