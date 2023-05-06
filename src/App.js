import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import { AppContextProvider } from "./Context/AppContext";
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
