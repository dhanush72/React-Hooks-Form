import React, { useRef } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form_content_right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="form_inputs">
          <label htmlFor="username" className="form_label">
            username
          </label>
          <input
            type="text"
            name="username"
            className="form_input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form_inputs">
          <label htmlFor="email" className="form_label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form_input"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form_inputs">
          <label htmlFor="password" className="form_label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form_input"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form_inputs">
          <label htmlFor="confirm_password" className="form_label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="form_input"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
          />
          {errors.confirm_password && <p>{errors.confirm_password}</p>}
        </div>
        <button type="submit" className="form_input_btn">
          Sign up
        </button>
        <span className="form_input_login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
