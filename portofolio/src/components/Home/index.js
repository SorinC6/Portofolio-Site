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
  const [scrollUp, setScrollUp] = useState(false);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    window.addEventListener("scroll", e => handleScrollDirection(e));

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  useEffect(() => {
    //console.log(theposition);
    if (theposition > 0.09) {
      dispatch({ type: "ABOUT_PAGE" });
    } else if (theposition > 0) {
      dispatch({ type: "HOME_PAGE" });
    }
    if (theposition > 0.35) {
      dispatch({
        type: "PROJECT_PAGE",
        payload: props => props.theme.projectNav
      });
    }
    if (theposition > 0.96) {
      dispatch({
        type: "CONTACT_PAGE",
        payload: props => props.theme.contactNav
      });
    }

    if (scrollUp) {
      dispatch({ type: "SCROLL_UP" });
    }
  }, [theposition, scrollUp]);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setPosition(Number(scrolled.toFixed(3)));
  };

  var prev = window.scrollY;
  const handleScrollDirection = e => {
    const window = e.currentTarget;
    //console.log(prev);
    if (prev > window.scrollY + 5) {
      //console.log("scrolling up");
      setScrollUp(true);
    } else if (prev < window.scrollY - 5) {
      setScrollUp(false);
    }

    prev = window.scrollY;
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
