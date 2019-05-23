import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";

class Home extends Component {
  render() {
    return (
      <Element name="Home">
        <HomeWrapper>
          <Particles />
          <TextWrapper>
            <h1>Chis Sorin</h1>
            <h2>Full Stack Developer</h2>
            <button>Click For More</button>
          </TextWrapper>
        </HomeWrapper>
      </Element>
    );
  }
}

export default Home;

const HomeWrapper = styled.div`
  background: darkred;
  height: 100vh;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;
`;
