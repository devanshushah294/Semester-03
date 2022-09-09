import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import SchoolOfDiplomaEngineering from "./SchoolOfDiplomaEngineering";
import SchoolOfEngineering from "./SchoolOfEngineering";
import SchoolOfComputerScience from "./SchoolOfComputerScience";
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
        <Link to="/students">Student</Link>
      </button>
      <span className="dropdown">
        Dropdown
        <button className="dropbtn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to={<SchoolOfEngineering />}>Link 1</Link>
          <Link to={<SchoolOfDiplomaEngineering />}>Link 2</Link>
          <Link to={<SchoolOfComputerScience />}>Link 3</Link>
        </div>
      </span>
      <br />
      <Outlet />
    </nav>
  );
};
export default Layout;
