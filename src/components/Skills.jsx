import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
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
  return (
    <motion.div
      className="skills"
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      variants={variants}
    >
      <div className="row d-flex">
        <div className="col-lg-4 col-md-2"></div>
        <div className="main_field col-lg-6 col-md-8">
          <h6 className="title_pro">PROFESSIONALS SKILLS</h6>
          <div className="professionals d-flex">
            <div className="pro_left d-flex flex-column">
              <div className="skill">
                <label className="skill_title">HTML</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="80"
                />
              </div>
              <div className="skill">
                <label className="skill_title">JAVASCRIPT</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="60"
                />
              </div>
              <div className="skill">
                <label className="skill_title">MySQL</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="80"
                />
              </div>
            </div>
            <div className="pro_right d-flex flex-column">
              <div className="skill">
                <label className="skill_title">CSS</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="70"
                />
              </div>
              <div className="skill">
                <label className="skill_title">PHP</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="30"
                />
              </div>
              <div className="skill">
                <label className="skill_title">JQuery</label>
                <input
                  type="range"
                  name="html"
                  className="html_range"
                  value="40"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
      </div>
    </motion.div>
  );
}

export default Skills;
