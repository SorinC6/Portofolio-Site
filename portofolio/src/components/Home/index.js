import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";
import Flip from "react-reveal/Flip";
import {
  HomeWrapper,
  TextWrapper,
  NameWrapper,
  ButtonWrapper
} from "./HomeStyle";

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
            <Flip left>
              <NameWrapper>Chis Sorin</NameWrapper>
              <h2>Full Stack Developer</h2>
            </Flip>
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
