import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="outlet">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};
export default Layout;
