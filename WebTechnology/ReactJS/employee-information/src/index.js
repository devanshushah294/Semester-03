import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Employees from "./Employees";
import EmployeeDetail from "./EmployeeDetail";
import EmployeeAdd from "./EmployeeAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/employee/:id" element={<EmployeeDetail />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/employees/add" element={<EmployeeAdd />}></Route>
          <Route path="/employees/edit/:id" element={<EmployeeAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
