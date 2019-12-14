import React from "react";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";
import Flip from "react-reveal/Flip";
import ProjectPreview from "./ProjectPreview";
import {
  HomeWrapper,
  TextWrapper,
  NameWrapper,
  ButtonWrapper,
  SocialWrapper,
  AWrapper
} from "./HomeStyle";

const Home = () => {
  const scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 500,
      delay: 1,
      smooth: true
    });
  };
  return (
    <Element name="Home">
      <HomeWrapper>
        <Particles />
        <TextWrapper>
          <Flip left>
            <NameWrapper>Sorin Chis</NameWrapper>
            <h2>Full Stack Developer</h2>
          </Flip>
          <ButtonWrapper onClick={scrollToAbout}>Learn More</ButtonWrapper>
        </TextWrapper>
        <SocialWrapper>
          <AWrapper href="https://github.com/SorinC6" target="_blank">
            <i className="fab fa-github" />
          </AWrapper>
          <AWrapper href="https://linkedin.com/in/sorinchis" target="_blank">
            <i className="fab fa-linkedin" />
          </AWrapper>
        </SocialWrapper>
        <ProjectPreview title="Pizza-App" top="0px" />
        <ProjectPreview title="Gatsby Blog" top="130px" />
      </HomeWrapper>
    </Element>
  );
};

export default Home;
