import React from "react";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CustomInput = ({ label, validationError, ...rest }) => {
  return (
    <>
      <Form.Label htmlFor="basic-url">{label}</Form.Label>
      <div hasValidation={true}>
        <Form.Control
          {...rest}
          isInvalid={validationError.length > 0 ? true : false}
        />
      </div>
    </>
  );
};

export default CustomInput;
