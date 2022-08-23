import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Department from "./department/Department";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}>
            Home
          </Route>
          <Route path="about" element={<About />}>
            About
          </Route>
          <Route path="contact" element={<Contact />}>
            Contact Us
          </Route>
          <Route path="department" element={<Department />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
