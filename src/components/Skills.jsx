import "./Skills.css";
import { motion } from "framer-motion/dist/framer-motion";

function Skills() {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="main_field col-sm-6">
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
        <div className="col-sm-2"></div>
      </div>
    </motion.div>
  );
}

export default Skills;
