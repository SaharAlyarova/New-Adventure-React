import React from 'react'
// import { NavLink } from 'react-router-dom';
import {useFormik} from 'formik';
import {customerValidationSchema} from '../../service/customer';
// import {addNewCustomer} from '././'
const LoginPage = () => {
   
    const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        Name: "",
      Password:"",
      },
      validationSchema: customerValidationSchema,
      onSubmit: (values) => {
        console.log(values)
        let customerObj = {
          Name: values.Name,
          Password:values.Password,
        };
        // addNewCustomer(customerObj);
        resetForm();
      },
    });
  return (
    <div className='container'>
     
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
          placeholder="Please add a name..."
        />
        <br />
        {errors.Name && touched.Name && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Name}
          </span>
        )}
        <br />
        <label htmlFor="Password" className="m-22">
          Password:
        </label>
        <input
          id="Password"
          name="Password"
          type="text"
          onChange={handleChange}
          value={values.Password}
          placeholder="Please add a password..."
        />
        <br />
        {errors.Password && touched.Password && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Password}
          </span>
        )}
          <nav>
       <button id="" type='submit' className='loginbtn'>Login in</button>

      </nav>
      </form>
    </div>
  )
}
export default LoginPage


















        