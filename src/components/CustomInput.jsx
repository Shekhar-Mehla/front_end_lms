import Form from "react-bootstrap/Form";

import React from "react";

const CustomInput = ({ label, type, name, placeholder }) => {
  return (
    <Form.Group className="p-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
};

export default CustomInput;
