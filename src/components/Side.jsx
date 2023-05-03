import React, { useContext } from "react";
import "./Side.css";
import Bones from "../home/bone-s-sakurako.jpeg";
import { AppContext } from "../Context/AppContext";

function Side() {
  const { isToggled, setHoverFunction, toggle, isHovered } =
    useContext(AppContext);

  return (
    <div
      className={
        isHovered ? `aside_field overlay col-sm-2` : `aside_field col-sm-2`
      }
      aria-expanded={isHovered ? `true` : `false`}
      onMouseOver={setHoverFunction}
      onMouseLeave={setHoverFunction}
    >
      {toggle ? (
        <div className="aside_box_2">
          <div className="icon_close" onClick={isToggled}>
            <i class="bi bi-x-lg icon_dark"></i>
          </div>

          <div className="aside_box_2_media">
            <div className="social_media">
              <span>
                <a href="https://twitter.com/nest_Ngoueni">
                  <i class="bi bi-twitter"></i>
                </a>
              </span>
              <p>twitter</p>
            </div>
            <div className="social_media">
              <span>
                <a href="https://www.frontendmentor.io/profile/BeinRain06">
                  <i class="bi bi-front"></i>
                </a>
              </span>
              <p>frontendMentor</p>
            </div>
            <div className="social_media">
              <span>
                <a href="https://github.com/BeinRain06">
                  <i class="bi bi-github"></i>
                </a>
              </span>
              <p>github</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="aside_box_1"
          aria-expanded={isHovered ? `true` : `false`}
        >
          <div className="aside_content d-flex flex-column">
            <img src={Bones} alt="no-react-dev" className="react_dev_logo" />
          </div>
          <div
            className="circle_hamburger "
            aria-expanded={isHovered ? `true` : `false`}
          >
            <div className="circle_hamburger_plus" onClick={isToggled}>
              <i class="bi bi-plus-lg  icon_white"></i>
            </div>
          </div>
          <div className="status_dev">
            <p className="status_title">React Developer</p>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Side;
