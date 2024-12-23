import Form from "react-bootstrap/Form";

import React from "react";

const CustomInput = () => {
  return (
    <Form.Group className="mb-3 p-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  );
};

export default CustomInput;
