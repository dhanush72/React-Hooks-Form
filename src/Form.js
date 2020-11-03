import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import SpaceShip from "./spaceship.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <>
      <div className="form_container">
        <span className="close_btn">x</span>
        <div className="form_content_left">
          <img src={SpaceShip} alt="spaceship" className="form_img" />
        </div>

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
