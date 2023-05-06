import { useEffect, useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { FlatTree } from "framer-motion";

function Navbar() {
  const [isMenuClicked, setMenuOnClick] = useState(false);
  const [isItWidth, setMenu] = useState(false);

  const addMenu = () => {
    if (window.innerWidth === "992") {
      setMenu(!isItWidth);
    }
  };

  const setFromClick = () => {
    setMenuOnClick(!isMenuClicked);
  };

  useEffect(() => {
    addMenu();
  }, [isItWidth]);

  return (
    <div className="navbar_container ">
      <div className="nav_content bg_nav d-flex   text-white">
        <div className="my_logo">
          <h5 className="logo_style">My Resume</h5>
        </div>
        <div className="menu">
          <div className="menu_hamburger" onClick={() => setFromClick()}>
            <i class="bi bi-list"></i>
          </div>
          <div
            className={
              isMenuClicked ? `menu_content menu_show` : `menu_content`
            }
          >
            <ul className="area_link_menu">
              <li className="feature" data-toggle="0">
                <Link to="/" className="link_to_menu">
                  Home
                </Link>
              </li>
              <li className="feature" data-toggle="1">
                <Link to="/skills" className="link_to_menu">
                  Skills
                </Link>
              </li>
              <li className="feature" data-toggle="2">
                <Link to="/experience" className="link_to_menu">
                  Experiences
                </Link>
              </li>
              <li className="feature" data-toggle="3">
                <Link to="/education" className="link_to_menu">
                  Educations
                </Link>
              </li>
              <li className="feature" data-toggle="4">
                <Link to="/about" className="link_to">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {isItWidth ? (
          div
        ) : (
          <div className="dashboard">
            <ul className="area_presented">
              <li className="feature" data-toggle="0">
                <Link to="/" className="link_to">
                  Home
                </Link>
              </li>
              <li className="feature" data-toggle="1">
                <Link to="/skills" className="link_to">
                  Skills
                </Link>
              </li>
              <li className="feature" data-toggle="2">
                <Link to="/experience" className="link_to">
                  Experiences
                </Link>
              </li>
              <li className="feature" data-toggle="3">
                <Link to="/education" className="link_to">
                  Educations
                </Link>
              </li>
              <li className="feature" data-toggle="4">
                <Link to="/about" className="link_to">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
