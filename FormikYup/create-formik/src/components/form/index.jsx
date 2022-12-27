import { useFormik } from "formik";
import React from "react";
import { addNewCustomer } from "../../servise/customer";
import { customerValidationSchema } from "./shema";
import "../form/index.scss"

const FormikYup = () => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        Name: "",
        phone: "",
        city: "",
        country: "",
      },
      validationSchema: customerValidationSchema,
      onSubmit: (values) => {
        console.log(values)
        let customerObj = {
          Name: values.Name,
          address: {
            city: values.city,
            country: values.country,
            phone: values.phone,
          },
        };
        addNewCustomer(customerObj);
        resetForm();
      },
    });

  return (
    <div>
      <form id="product-form" onSubmit={handleSubmit}>
        {console.log("error", errors)} {console.log("error", errors)}{" "}
        <label htmlFor="Name" className="m-2">
           Name:
        </label>
        <input
          id="Name"
          name="Name"
          type="text"
          onChange={handleChange}
          value={values.Name}
        />
        <br />
        {errors.Name && touched.Name && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Name}
          </span>
        )}
        <br />
        <label htmlFor="email" className="m-2">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        {errors.email && touched.email && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.email}
          </span>
        )}
        
       
        <br />
        <label htmlFor="phone" className="m-2">
          Phone:
        </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={handleChange}
          value={values.phone}
        />
        <br />
        {errors.phone && touched.phone && (
          <span style={{ color: "red", fontSize: "16px" }}>{errors.phone}</span>
        )}
        <br />
        <label htmlFor="website" className="m-2">
          Website:
        </label>
        <input
          id="website"
          name="website"
          type="website"
          onChange={handleChange}
          value={values.website}
        />
        <br />
        {errors.website && touched.website && (
          <span style={{ color: "red", fontSize: "16px" }}>{errors.phone}</span>
        )}
        <br />

        <button type="submit" className="formbtn">
          Send Message 
        </button>
      </form>
    </div>
  );
};

export default FormikYup;