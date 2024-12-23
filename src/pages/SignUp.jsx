import React from "react";
import CustomInput from "../components/CustomInput";
import { Card, Col, Row } from "react-bootstrap";
const SignUp = () => {
  const inputfild = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
    },
  ];
  return (
    <Row className="d-flex mt-3 justify-content-center align-items-center">
      <Col md={5} sm={5}>
        <Card>
          <CustomInput></CustomInput>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
