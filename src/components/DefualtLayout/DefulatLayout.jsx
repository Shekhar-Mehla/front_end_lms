import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const DefulatLayout = () => {
  return (
    <div className="bg-dark p-3 text-white defaultLayout container-fluid">
      <Header className=""></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer className=""></Footer>
    </div>
  );
};

export default DefulatLayout;
