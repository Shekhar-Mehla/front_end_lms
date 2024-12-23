import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const DefulatLayout = () => {
  return (
    <Container>
      <Header className="bg-dark text-white"></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer className="bg-dark text-white"></Footer>
    </Container>
  );
};

export default DefulatLayout;
