import React, { Component, useContext, useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import Particles from "../Particles/index";
import Flip from "react-reveal/Flip";
import Context from "../context";
import {
  HomeWrapper,
  TextWrapper,
  NameWrapper,
  ButtonWrapper,
  SocialWrapper,
  AWrapper
} from "./HomeStyle";

const Home = () => {
  const [theposition, setPosition] = useState(0);

  // componentDidMount() {
  //   window.addEventListener("scroll", this.listenToScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.listenToScroll);
  // }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setPosition(scrolled);
  };
  const scrollToAbout = () => {
    scroller.scrollTo("About", {
      duration: 500,
      delay: 1,
      smooth: true
    });
  };

  const { state, dispatch } = useContext(Context);

  console.log(Number(theposition.toFixed(3)));
  return (
    <Element name="Home">
      <HomeWrapper>
        <Particles />
        <TextWrapper>
          <Flip left>
            <NameWrapper>Sorin Chis</NameWrapper>
            <h2>Full Stack Developer</h2>
          </Flip>
          <ButtonWrapper onClick={scrollToAbout}>Click For More</ButtonWrapper>
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
};

export default Home;
