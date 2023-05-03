import "./Experience.css";
import { motion } from "framer-motion/dist/framer-motion";

function Experience() {
  return (
    <motion.div
      className="exp"
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
          <h6 className="title_pro">EXPERIENCES</h6>
          <div className="experience_box d-flex flex-row">
            <div className="time_being">
              <span className="about_duration">Fevrier 2022 -March 2023</span>
            </div>
            <div className="web_dev_info">
              <div className="web_dev_content">
                <div className="spacing_bar"></div>
                <div className="web_description ">
                  <p className="description_title">WEB DEVELOPER</p>
                  <p className="description_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio error dignissimos inventore, autem veritatis aliquid
                    excepturi vitae eius alias repellendus aliquam beatae culpa
                    molestias placeat hic, voluptates possimus itaque rerum
                    ipsum eveniet facilis ex dolor, harum cum. Ea, aspernatur
                    eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="experience_box d-flex flex-row">
            <div className="time_being">
              <span className="about_duration">Fevrier 2022 -March 2023</span>
            </div>
            <div className="web_dev_info">
              <div className="web_dev_content">
                <div className="spacing_bar"></div>
                <div className="web_description ">
                  <p className="description_title">WEB DEVELOPER</p>
                  <p className="description_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio error dignissimos inventore, autem veritatis aliquid
                    excepturi vitae eius alias repellendus aliquam beatae culpa
                    molestias placeat hic, voluptates possimus itaque rerum
                    ipsum eveniet facilis ex dolor, harum cum. Ea, aspernatur
                    eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </motion.div>
  );
}
export default Experience;
