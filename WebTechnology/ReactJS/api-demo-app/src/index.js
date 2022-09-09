import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faculties from "./Faculties";
import Home from "./Home";
import Layout from "./Layout";
import { Vehicles } from "./Vehicles";
import VehicleDetail from "./VehicleDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/faculties" element={<Faculties />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/VehicleDetail/:id" element={<VehicleDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
