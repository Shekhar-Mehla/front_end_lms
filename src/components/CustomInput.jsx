import Form from "react-bootstrap/Form";
import useForm from "../hooks/useForm";
import React from "react";

const CustomInput = ({
  label,
  type,
  name,
  placeholder,
  handleOnChange,
  required,
}) => {
  return (
    <Form.Group required className="p-2" onChange={(e) => handleOnChange(e)}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        required={required}
        name={name}
        placeholder={placeholder}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomInput;
