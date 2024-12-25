import React from "react";
import CustomInput from "../components/CustomInput";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

const SignUp = () => {
  const { handleOnChange, form, emailError } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputfild = [
    {
      label: "Given Name*",
      type: "text",
      name: "FName",
      placeholder: "Given Name",
      required: true,
    },
    {
      label: "Family Name*",
      type: "text",
      name: "LName",
      placeholder: "Family Name",
      required: true,
    },
    {
      label: "Email*",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      name: "phone",
      placeholder: "047565747",
    },
    {
      label: "Password*",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: " Confirm Password*",
      type: "password",
      name: "Confirmpassword",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <div className="sigup_bg">
      <Row className="shadow m-5  d-flex  justify-content-center align-items-center">
        <Col md={3}>
          <Card
            className="d-flex flex-wrap"
            style={{
              backgroundColor: "rgb(0 0 0 / 30%)",
              color: " #e1f8fe",
            }}
          >
            <h3 className="p-2 text-center fw-bolder">
              Welcome to your local Library!
            </h3>
            <hr></hr>
            <Form
              onSubmit={(e) => {
                handleOnSubmit(e);
              }}
              className="d-flex flex-column flex-wrap "
            >
              {inputfild.map((item) => (
                <CustomInput
                  key={item.name}
                  {...item}
                  handleOnChange={handleOnChange}
                ></CustomInput>
              ))}
              <Button type="submit" className="p-2 w-100  mb-2 ">
                Sign Up
              </Button>
            </Form>

            <Card.Text>
              {emailError.map((item) => (
                <li className="emailError">{item}</li>
              ))}
            </Card.Text>

            <Card.Text className="text-center">
              Already registered ?{" "}
              <Link className="text-style-none" to="/login">
                Login now
              </Link>{" "}
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
