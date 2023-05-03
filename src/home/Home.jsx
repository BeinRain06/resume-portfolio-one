/* import { useState } from "react"; */
import "./Home.css";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import { motion } from "framer-motion/dist/framer-motion";

function Home() {
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
      <div className="full_page">
        <div className="home_container container">
          <Profile />
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
