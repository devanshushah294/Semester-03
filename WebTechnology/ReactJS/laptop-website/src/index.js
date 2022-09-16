import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import LaptopAdd from "./LaptopAdd";
import LaptopDetails from "./LaptopDetails";
import Laptops from "./Laptops";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/laptops" element={<Laptops />}></Route>
          <Route path="/laptop/edit/:id" element={<LaptopAdd />}></Route>
          <Route path="/laptopdetails/:id" element={<LaptopDetails />}></Route>
          <Route path="/laptop/add" element={<LaptopAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
