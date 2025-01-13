import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";

import Stack from "react-bootstrap/Stack";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { resgisterUser } from "../services/api";
const initialState = {
  FName: "ddd",
  LName: "df",
  phone: "12345",
  email: "a@gmail.com",
  confirmpassword: "Aa123$",

  password: "Aa123$",
};
const SignUp = () => {
  const { handleOnChange, validationError, form, setForm } =
    useForm(initialState);

  const signUpInputFields = [
    {
      label: "Given Name",
      type: "text",
      name: "FName",
      placeholder: "Given Name",
      required: true,
      value: form.FName,
    },
    {
      label: "Family Name",
      type: "text",
      name: "LName",
      placeholder: "Family Name",
      required: true,
      value: form.LName,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
      value: form.email,
    },
    {
      label: "Phone",
      type: "number",
      name: "phone",
      placeholder: "047565747",
      value: form.phone,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
      autoComplete: "new-password",
      value: form.password,
    },
    {
      label: " Confirm Password",
      type: "password",
      name: "confirmpassword",
      placeholder: "*****",
      required: true,
      autoComplete: "new-password",
      value: form.confirmpassword,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = resgisterUser(form);
    setForm(initialState);
  };

  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {" "}
        <Col md={8} lg={4}>
          <div className=" form-wrapper">
            <h2 className="typing-effect">Welcome to the Family </h2>
            <hr />
            <Form className="   " onSubmit={handleSubmit}>
              <Stack gap={1} className="  ">
                {signUpInputFields.map((item) => (
                  <CustomInput
                    className=""
                    key={item.name}
                    {...item}
                    onChange={handleOnChange}
                  ></CustomInput>
                ))}
                {console.log(validationError)}
                <Button
                  type="submit"
                  disabled={validationError.length > 0 ? true : false}
                  className="submit-btn"
                >
                  Sign Up
                </Button>
                <div>
                  {validationError.length > 0 &&
                    validationError.map((error, i) => (
                      <li className="bg-danger rounded-2 px-2 py-2" key={i}>
                        {error}
                      </li>
                    ))}
                </div>
              </Stack>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
