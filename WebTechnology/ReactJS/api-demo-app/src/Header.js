import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/vehicles">Vehicles</Link>
      </button>
      <button>
        <Link to="/faculties">Faculties</Link>
      </button>
    </div>
  );
};
export default Header;
