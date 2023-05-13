import "./Profile.css";
import Side from "./Side";
import About from "./About";
import { motion } from "framer-motion";

function Profile() {
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
      className="home"
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      variants={variants}
    >
      <div className="profile_display row d-flex flex-lg-row flex-column">
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
        <Side />
        <About />
        <div className="col-lg-2 col-md-2 col-sm-2"></div>
      </div>
    </motion.div>
  );
}

export default Profile;
