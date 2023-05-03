import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./Context/AppContext";
import Home from "./home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Navbar from "./header/Navbar";
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
