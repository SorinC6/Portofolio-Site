import React from "react";
import "./App.css";
import Sticky from "react-sticky-el";
import Home from "./components/Home/index";
import Navigation from "./components/NavBar/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Home />
      <St>
        <Navigation />
      </St>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

const St = styled(Sticky)`
  position: absolute;
  z-index: 100;
  width: 100%;
`;
