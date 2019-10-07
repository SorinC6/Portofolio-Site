import React, { useContext, useReducer } from "react";
import "./App.css";
import Context from "./components/context";
import reducer from "./components/reducer";
import Sticky from "react-sticky-el";
import Home from "./components/Home/index";
import Navigation from "./components/NavBar/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";

function App() {
  const initialValue = {
    color: "black"
  };

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Home />
        <St>
          <Navigation />
        </St>
        <About />
        <Projects />
        <Contact />
      </Context.Provider>
    </div>
  );
}

export default App;

const St = styled(Sticky)`
  position: absolute;
  z-index: 100;
  width: 100%;
`;
