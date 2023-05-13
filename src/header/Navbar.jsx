import { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
/* import { FlatTree } from "framer-motion"; */

function Navbar() {
  const [isMenuClicked, setMenuOnClick] = useState(false);

  const setFromClick = () => {
    setMenuOnClick(!isMenuClicked);
  };

  return (
    <div className="navbar_container ">
      <div className="nav_content bg_nav d-flex   text-white">
        <div className="my_logo">
          <h5 className="logo_style">My Resume</h5>
        </div>
        <div className="nav_list">
          <div className="menu" onClick={() => setFromClick()}>
            <div className="menu_hamburger">
              {isMenuClicked ? (
                <div className="anim_close">
                  <i className="bi bi-x-lg"></i>
                </div>
              ) : (
                <div className="anim_open">
                  <i className="bi bi-list"></i>
                </div>
              )}
            </div>
            <div className="menu_content"></div>
          </div>
          <ul
            className={
              isMenuClicked ? "area_presented menu_show" : "area_presented"
            }
          >
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
      </div>
    </div>
  );
}

export default Navbar;
