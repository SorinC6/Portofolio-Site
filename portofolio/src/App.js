import React from "react";
import "./App.css";
import Sticky from "react-sticky-el";
import Home from "./components/Home/index";
import Navigation from "./components/NavBar/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div>
      <Home />
      <Sticky>
        <Navigation />
      </Sticky>
      <About />
      <Projects />
    </div>
  );
}

export default App;
