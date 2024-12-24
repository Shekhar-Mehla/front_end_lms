import React from "react";
import CustomInput from "../components/CustomInput";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignUp = () => {
  const inputfild = [
    {
      label: "Given Name*",
      type: "text",
      name: "FName",
      placeholder: "Enter your Name",
      required: true,
    },
    {
      label: "Family Name*",
      type: "text",
      name: "LName",
      placeholder: "Enter your Name",
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
      <Row className="d-flex shadow  mb-2  justify-content-center align-items-center">
        <Col md={6} sm={10}>
          <Card
            className="mt-3 p-3"
            style={{ backgroundColor: "rgb(0 0 0 / 30%)", color: " #e1f8fe" }}
          >
            <h3 className="p-2 text-center fw-bolder">
              Welcome to your local Library!
            </h3>
            <hr></hr>
            <Form>
              {inputfild.map((item) => (
                <CustomInput key={item.name} {...item}></CustomInput>
              ))}
              <Button type="submit" className="p-2 w-100  mb-2 ">
                Sign Up
              </Button>
            </Form>
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
