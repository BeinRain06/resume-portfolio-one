import "./Education.css";
import { motion } from "framer-motion/dist/framer-motion";

function Education() {
  return (
    <motion.div
      className="education"
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
                <button className="btn btn-primary">view</button>
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
                <button className="btn btn-primary">view</button>
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
                <button className="btn btn-primary">view</button>
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
                <button className="btn btn-primary">view</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </motion.div>
  );
}

export default Education;
