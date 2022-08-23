import "./layout.css";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/contact">Contact Us</Link>
      </button>
      <button>
        <Link to="/department">Departments</Link>
      </button>
      <br />
      <Outlet />
    </nav>
  );
};
export default Layout;
