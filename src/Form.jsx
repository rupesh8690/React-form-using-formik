import { useState } from "react";
import { Formik, useFormik } from 'formik';
export default function Form() {

  const validate = values => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (values.fullName.length > 15) {
      errors.fullName = 'Must be 15 characters or less';
    }

  
    return errors;
  };

    const formik = useFormik({
      initialValues: {
        fullName: '',
        username: '',
        password: '',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        name="fullName"
        id="fullname"
        placeholder="Enter full name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
     
      />
        {formik.errors.fullName ? <div style={{color:'red'}}>{formik.errors.fullName}</div> : null}

{/* name must be similar to state variable */}
<br />
<br />
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter user name"
        value={formik.values.username}
        onChange={formik.handleChange}
       
      />
   

  <br />
  <br />
     <label htmlFor="password">Password</label>
     <input type="password" name="password" id="password" 
     value={formik.values.password}
     placeholder="Enter password"  onChange={formik.handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}
