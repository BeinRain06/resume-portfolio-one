import { useState } from "react";
import "./Education.css";
import { motion } from "framer-motion";

function Education() {
  const [isHover, setIsHover] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };

  const btnHover = () => {
    setIsHover(!isHover);
  };

  return (
    <motion.div
      className="education"
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      variants={variants}
    >
      <div className="row">
        <div className="col-lg-4 col-md-2"></div>
        <div className="main_field col-lg-6 col-md-8">
          <h6 className="title_pro">EDUCATION</h6>
          <div className="education_field">
            <div className="education row">
              <div className="education_item col-sm-6">
                <p className="diploma">Certificate</p>
              </div>
              <div className="education_item col-sm-2">Date</div>
              <div className="education_item col-sm-4"></div>
            </div>
            <div className="education row">
              <div className="education_item col-sm-6">
                <p>Web Development</p>
              </div>
              <div className="education_item col-sm-2">
                <p>Jan 2020</p>
              </div>
              <div className="education_item col-sm-4">
                <button className={isHover ? "my_btn btn_hover" : "my_btn"}>
                  view
                </button>
              </div>
            </div>
            <div className="education row">
              <div className="education_item col-sm-6">
                <p>Graphic Design</p>
              </div>
              <div className="education_item col-sm-2">
                <p>May 2021</p>
              </div>
              <div className="education_item col-sm-4">
                <button className={isHover ? "my_btn btn_hover" : "my_btn"}>
                  view
                </button>
              </div>
            </div>
            <div className="education row">
              <div className="education_item col-sm-6">
                <p>Tech Gadgets</p>
              </div>
              <div className="education_item col-sm-2">
                <p>Aug 2021</p>
              </div>
              <div className="education_item col-sm-4">
                <button className={isHover ? "my_btn btn_hover" : "my_btn"}>
                  view
                </button>
              </div>
            </div>
            <div className="education row">
              <div className="education_item col-sm-6">
                <p>Other</p>
              </div>
              <div className="education_item col-sm-2">
                <p>Nov 2021</p>
              </div>
              <div className="education_item col-sm-4">
                <button
                  className={isHover ? "my_btn btn_hover" : "my_btn"}
                  onMouseOver={() => btnHover()}
                  onMouseLeave={() => btnHover()}
                >
                  view
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
      </div>
    </motion.div>
  );
}

export default Education;
