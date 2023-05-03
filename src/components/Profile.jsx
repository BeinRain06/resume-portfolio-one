import "./Profile.css";
import Side from "./Side";
import About from "./About";
import { motion } from "framer-motion/dist/framer-motion";

function Profile() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        <div className="col-sm-2"></div>
        <Side />
        <About />
        <div className="col-sm-2"></div>
      </div>
    </motion.div>
  );
}

export default Profile;
