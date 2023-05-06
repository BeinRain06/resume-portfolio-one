/* import { useState } from "react"; */
import "./Home.css";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import { motion } from "framer-motion";

function Home() {
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
