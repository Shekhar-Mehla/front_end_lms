import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
import SideBar from "../SideBar";

const UserLayout = () => {
  return (
    <Container
      className="bg-dark"
      style={{ minHeight: "100vh", maxWidth: "100vw" }}
    >
      <Row className="h-15">
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <main>
        <Row style={{ minHeight: "80vh" }} className="bg-dark text-white   ">
          <Col md={3} sm={3} lg={2}>
            <h3>Welccome Back name</h3>
            <hr />
            <SideBar></SideBar>
          </Col>
          <Col className="bg-primary" md={9} sm={9} lg={10}>
            {" "}
            <Outlet></Outlet>
          </Col>
        </Row>
      </main>
      <Row style={{ maxHeight: "10vh" }} className="  bg-dark text-white">
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLayout;
