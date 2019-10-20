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
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#f0ece9",
  secondary: "#666564",
  h2: "#666564",
  background: "#0091cf"
};

function App() {
  const initialValue = {
    color: "black"
  };

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ state, dispatch }}>
          <Home />
          <St>
            <Navigation />
          </St>
          <About />
          <Projects />
          <Contact />
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;

const St = styled(Sticky)`
  position: absolute;
  z-index: 100;
  width: 100%;
`;
