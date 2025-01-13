import React from "react";
import CustomInput from "../components/CustomInput";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import InputValidatorTooltip from "../components/tooltips/InputValidatorTooltip";
import { logInUser } from "../services/api.js";
const SignIn = () => {
  const { form, handleOnChange, setForm } = useForm({
    email: "a@a",
    password: "123",
  });
  const signInInput = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required: true,
      value: form.email,
    },

    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "*****",
      required: true,
      value: form.password,
    },
  ];
  const initialState = {
    email: "a@a",

    password: "123",
  };

  // on submit handler
  const onSubmitHnadle = async (e) => {
    e.preventDefault();
    console.log(e);
    const response = await logInUser(form);
    const { accessJwt, refreshJwt } = response.payload;
    if (accessJwt && refreshJwt) {
      localStorage.setItem("refreshJwt", refreshJwt);
      sessionStorage.setItem("accessJwt", accessJwt);
    }

    
    setForm(initialState);
  };
  return (
    <div className="sigup_bg signInHeight  shadow d-flex   mb-2  justify-content-center align-items-center  ">
      <Row className="">
        <Col>
          <Card className="mt-3 CardBackground mb-3 p-5">
            <h3 className="p-2 text-center card-title fw-bolder">
              Welcome to your local Library!
            </h3>
            <hr className="text-white"></hr>
            <Form onSubmit={onSubmitHnadle}>
              {signInInput.map((item) => (
                <CustomInput
                  className="card-text"
                  key={item.name}
                  {...item}
                  onChange={handleOnChange}
                ></CustomInput>
              ))}
              <Button type="submit" className="submit-btn">
                Sign In
              </Button>
            </Form>
            <Card.Text className="me-auto">
              dont have account?{" "}
              <Link className="link" to="/register">
                Register Now
              </Link>{" "}
              <Link className="link" to="/register"></Link>{" "}
            </Card.Text>
            <Card.Text className="me-atuo  ">
              Forgot password?{" "}
              <Link to="forgot-password " className="link">
                Reset Now
              </Link>
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <InputValidatorTooltip></InputValidatorTooltip>
    </div>
  );
};

export default SignIn;
