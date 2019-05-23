import React from "react";
import "./App.css";
import Home from "./components/Home/index";
import Navigation from "./components/NavBar/Navigation";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Home />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
