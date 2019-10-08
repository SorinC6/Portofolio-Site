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
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  useEffect(() => {
    console.log(theposition);

    if (theposition > 0.09) {
      dispatch({ type: "ABOUT_PAGE" });
    } else if (theposition > 0) {
      console.log("WAHAAA");
      dispatch({ type: "HOME_PAGE" });
    }
    if (theposition > 0.3) {
      dispatch({ type: "PROJECT_PAGE" });
    }
    if (theposition > 0.96) {
      dispatch({ type: "CONTACT_PAGE" });
    }
  }, [theposition]);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setPosition(Number(scrolled.toFixed(3)));
  };

  const handleScrollDirection = e => {
    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
      console.log("scrolling up");
    } else if (this.prev < window.scrollY) {
      console.log("scrolling down");
    }
    this.prev = window.scrollY;
  };

  
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
