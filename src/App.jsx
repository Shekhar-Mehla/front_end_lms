import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import DefulatLayout from "./components/DefualtLayout/DefulatLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<DefulatLayout></DefulatLayout>}>
        <Route path="/" element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
