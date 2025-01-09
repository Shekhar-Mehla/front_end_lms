import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Stack from "react-bootstrap/Stack";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { resgisterUser } from "../services/api";

const SignUp = () => {
  const { handleOnChange, validationError, form, setForm } = useForm({
    FName: "",
    LName: "",
    phone: "",
    email: "",
    password: "",

    confirmpassword: "",
  });

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
  const initialState = {
    FName: "",
    LName: "",
    phone: "",
    email: "",
    confirmpassword: "",

    password: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = resgisterUser(form);
    setForm(initialState);
  };

  return (
    <div className="d-flex justify-content-center sigup_bg py-3 w-100  ">
      <Form
        className="  card CardBackground shadow flex-wrap px-3 text-white "
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mt-3 card-title">Welcome to the Family </h2>
        <hr />
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
  );
};

export default SignUp;
