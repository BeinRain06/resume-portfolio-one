import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_container ">
      <div className="nav_content bg_nav d-flex   text-white">
        <div className="my_logo">
          <h5 className="logo_style">My Resume</h5>
        </div>
        <div className="dashboard">
          <ul className="area_presented">
            <li className="feature">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className="feature">
              <Link to="/skills" style={{ textDecoration: "none" }}>
                Skills
              </Link>
            </li>
            <li className="feature">
              <Link to="/experience" style={{ textDecoration: "none" }}>
                Experiences
              </Link>
            </li>
            <li className="feature">
              <Link to="/education" style={{ textDecoration: "none" }}>
                Educations
              </Link>
            </li>
            <li className="feature">
              <Link to="/about" style={{ textDecoration: "none" }}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
