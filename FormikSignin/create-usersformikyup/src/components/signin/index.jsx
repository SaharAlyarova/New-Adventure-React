import React from 'react'
import { NavLink } from 'react-router-dom';
import {useFormik} from 'formik'
import { customerValidationSchema2 } from '../../service/customer';
// import { useEffect } from 'react';
// import {addNewCustomer} from "../../service/customer"
const SignInPage = () => {
    const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        Name: "",
        Surname:"",
      Password:"",
      Replaypassword:"",
      },
      validationSchema: customerValidationSchema2,
      onSubmit: (values) => {
        // console.log(values)
        // let customerObj = {
        //   Name: values.Name,
        //   Password:values.Password,
        // };
        // onSubmit={(values, { setSubmitting }) => {
            // setTimeout(() => {
            localStorage.setItem("signin",JSON.stringify(values));
            //   setSubmitting(false);
            // }, 400);
            resetForm();
          }}
            // let array= customerObj
        
    //   console.log(localStorage.setItem("books".JSON.stringify(customerObj)))      
        
 
      
        // addNewCustomer(customerObj);
        
    //   },
    // });
    )
   
  return (
    <div>
     
 <form id="product-form" onSubmit={handleSubmit}>
          {/* {console.log("error", errors)} {console.log("error", errors)}{" "} */}
          <label htmlFor="Name" className="Name">
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
        <label htmlFor="Surname" className="Surname">
        Surname:
          </label>
          <input
          id="Surname"
          name="Surname"
          type="text"
          onChange={handleChange}
          value={values.Surname}
          placeholder="Please add a surname..."
        />
        <br />
        {errors.Surname && touched.Surname && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Surname}
          </span>
        )}
        <br />
        <label htmlFor="Password" className="Password">
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
            <br />
        <label htmlFor="Replaypassword" className="Replaypassword">
        Replay Password:
        </label>
        <input
          id="Replaypassword"
          name="Replaypassword"
          type="text"
          onChange={handleChange}
          value={values.Replaypassword}
          placeholder="Please add a Replaypassword..."
        />
        <br />
        {errors.Replaypassword && touched.Replaypassword && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Replaypassword}
          </span>
        )}

<br />
        <label for="Country">Choose a Country</label>

<select name="Country" id="Country" 
          
          onChange={handleChange}
          value={values.Country}>
  <option value="Afghanistan">Afghanistan</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Albania">Albania</option>
  <option value="Bahamas">Bahamas</option>
</select>
<br />
        {errors.Country && touched.Country && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.Country}
          </span>
        )}
        <br />

        <br />
        <label for="City">Choose a City</label>

<select name="City" id="City" 
          
          onChange={handleChange}
          value={values.City}>
  <option value="Kabul">Kabul</option>
  <option value="Baku">Baku</option>
  <option value="Tirana">Tirana</option>
  <option value="Nassau">Nassau</option>
</select>
<br />
        {errors.City && touched.City && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.City}
          </span>
        )}
        <br />
          <nav>
       <button id="" type='submit' className='signinbtn'> <NavLink to={"/users"}></NavLink> Sign in</button>

      </nav>
      </form>
    </div>
  )
 
}


export default SignInPage
