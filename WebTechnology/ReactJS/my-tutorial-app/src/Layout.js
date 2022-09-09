import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="outlet">
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/product">Product</Link>
        </button>
        <button>
          <Link to="/student">Student</Link>
        </button>
        <Outlet />
      </div>
      <div className="clearfix"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
