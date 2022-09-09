import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Faculties from "./Faculties";
import Layout from "./Layout";
import SchoolOfComputerScience from "./Schools/SchoolOfComputerScience";
import SchoolOfDiplomaEngineering from "./Schools/SchoolOfDiplomaEngineering";
import SchoolOfEngineering from "./Schools/SchoolOfEngineering";
import SchoolOfManagement from "./Schools/SchoolOfManagement";
import SchoolOfScience from "./Schools/SchoolOfScience";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/SchoolOfComputerScience"
            element={<SchoolOfComputerScience />}
          ></Route>
          <Route
            path="/SchoolOfDiplomaEngineering"
            element={<SchoolOfDiplomaEngineering />}
          ></Route>
          <Route
            path="/SchoolOfEngineering"
            element={<SchoolOfEngineering />}
          ></Route>
          <Route
            path="/SchoolOfManagement"
            element={<SchoolOfManagement />}
          ></Route>
          <Route path="/SchoolOfScience" element={<SchoolOfScience />}></Route>
          <Route path="/faculties" element={<Faculties />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
