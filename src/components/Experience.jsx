import "./Experience.css";
import { motion } from "framer-motion";

function Experience() {
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
      className="exp"
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      variants={variants}
    >
      <div className="row">
        <div className="col-lg-4 col-md-2 col-sm-2"></div>
        <div className="main_field col-lg-6 col-md-8 col-sm-8">
          <h6 className="title_pro">EXPERIENCES</h6>
          <div className="experience_box d-flex ">
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
          <div className="experience_box d-flex">
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
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
      </div>
    </motion.div>
  );
}
export default Experience;
