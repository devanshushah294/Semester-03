import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import { Layout } from "./Layout";
// import { Home } from "./Home";
// import { Product } from "./Product";
// import { Student } from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/home" index element={<Home />}></Route>
//         <Route path="/student" element={<Student />}></Route>
//         <Route path="/product" element={<Product />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
const [laptops, setLaptops] = useState([]);
useEffect(() => {
  fetch("loca").then().then();
}, []);
root.render();
