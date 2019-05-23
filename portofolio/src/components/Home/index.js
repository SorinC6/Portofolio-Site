import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";

class Home extends Component {
  scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 500,
      delay: 1,
      smooth: true
    });
  };
  render() {
    return (
      <Element name="Home">
        <HomeWrapper>
          <Particles />
          <TextWrapper>
            <NameWrapper>Chis Sorin</NameWrapper>
            <h2>Full Stack Developer</h2>
            <ButtonWrapper onClick={this.scrollToAbout}>
              Click For More
            </ButtonWrapper>
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

  h2 {
    margin: 10px;
    font-size: 40px;
    letter-spacing: 10px;
    color: darkgray;
    text-align: center;
  }

  button {
    padding: 10px 20px;
    margin: 20px;
    font-size: 20px;
  }
`;

const NameWrapper = styled.h1`
  margin: 30px;
  font-size: 55px;
  letter-spacing: 22px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 1px 0 #efefef, 0 2px 0 #efefef, 0 3px 0 #efefef,
    0 4px 0 #efefef, 0 30px 5px rgba(0, 0, 0, 0.1);
  animation: float 2s linear infinite;
  animation-direction: alternate;

  @keyframes float {
    from {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(-5deg);
    }
  }
`;

const ButtonWrapper = styled.a`
  margin: 20px;
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 30px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px 40px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 1s border-radius;
  &:hover {
    border-radius: 20px;
  }
  &:before {
    content: "";
    background: red;
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    z-index: -1;
    transform: skew(-15deg);
    animation: moving 1.2s linear infinite;
    transition: all 0.5s;
  }
  &:hover:before {
    width: 100%;
    transform: skew(0deg);
    animation: none;
    background: darkgoldenrod;
  }
  @keyframes moving {
    from {
      left: -120px;
    }
    to {
      left: 100%;
    }
  }
`;
