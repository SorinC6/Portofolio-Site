import React, { useContext, useReducer } from "react";
import "./App.css";
import Context from "./components/context";
import reducer from "./components/reducer";
// import Sticky from "react-sticky-el";
import Home from "./components/Home/index";
import Navigation from "./components/NavBar/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import styled, { ThemeProvider } from "styled-components";
import { lighten, darken } from "polished";

const theme = {
  primary: "#f0ece9",
  secondary: "#666564",
  h2: "#666564",
  background: "#0091cf",
  projectBackground: darken(0.1, "#0091cf"),
  projectNav: darken(0.1, "#f0ece9"),
  contactBackground: darken(0.2, "#0091cf"),
  contactNav: darken(0.2, "#f0ece9")
};

function App() {
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

const St = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;
