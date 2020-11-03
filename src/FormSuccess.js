import React from "react";
import Success from "./success.svg";

const FormSuccess = () => {
  return (
    <div className="form_content_right">
      <div className="form_success">
        <img src={Success} alt="" className="form_img_2" />
      </div>
    </div>
  );
};

export default FormSuccess;
