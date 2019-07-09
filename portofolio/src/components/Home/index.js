import React, { Component } from "react";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";
import Flip from "react-reveal/Flip";
import {
  HomeWrapper,
  TextWrapper,
  NameWrapper,
  ButtonWrapper,
  SocialWrapper,
  AWrapper
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
          <SocialWrapper>
            <AWrapper href="https://github.com/SorinC6" target="_blank">
              <i className="fab fa-github" />
            </AWrapper>
            <AWrapper href="https://linkedin.com/in/sorinchis" target="_blank">
              <i className="fab fa-linkedin" />
            </AWrapper>
          </SocialWrapper>
        </HomeWrapper>
      </Element>
    );
  }
}

export default Home;
