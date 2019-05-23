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
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;

  h1 {
    margin: 30px;
    font-size: 55px;
    letter-spacing: 22px;
    font-weight: bold;
  }
  h2 {
    margin: 10px;
    font-size: 40px;
    letter-spacing: 10px;
    color: darkgray;
  }

  button {
    padding: 10px 20px;
    margin: 20px;
    font-size: 20px;
  }
`;
