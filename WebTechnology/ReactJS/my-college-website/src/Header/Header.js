import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="width-100vw navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand DU-logo" to="/">
            <img
              src="https://www.darshan.ac.in/Content/media/DU_Logo.svg "
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" navbar collapse navbar-collapse display-flex flex-direction-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className=" bg-light nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="background-white-transparent nav-item dropdown">
                <Link
                  className="nav-link background-white-transparent dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Schools
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/SchoolOfComputerScience"
                    >
                      School of Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/SchoolOfDiplomaEngineering"
                    >
                      School of Diploma Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/SchoolOfComputerScience"
                    >
                      School of Computer Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SchoolOfManagement">
                      School of Management
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/SchoolOfScience">
                      School of Science
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="bg-light nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="bg-light nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
