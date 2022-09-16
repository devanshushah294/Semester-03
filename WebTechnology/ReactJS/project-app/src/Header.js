import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active hover-pink"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-pink"
                  to="/employees"
                  style={{ color: "white" }}
                >
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link hover-pink"
                  to="/employees/add"
                  style={{ color: "white" }}
                >
                  Add Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
