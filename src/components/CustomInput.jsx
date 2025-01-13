import React from "react";

import Form from "react-bootstrap/Form";

const CustomInput = ({
  label,

  name,

  ...rest
}) => {
  return (
    <Form.Group className="form-group">
      <Form.Label className="text-light ">
        {label}
        <span className="text-danger fw-bolder ">*</span>
      </Form.Label>

      <Form.Control className="" {...rest} name={name} />
    </Form.Group>
  );
};

export default CustomInput;
