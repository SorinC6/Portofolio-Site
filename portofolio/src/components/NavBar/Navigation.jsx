import React, { Component } from "react";
import { Element, Link, scroller } from "react-scroll";
import styled from "styled-components";

class Navigation extends Component {
  state = {
    mobileMenu: false
  };

  //   scrollToHome = () => {
  //     scroller.scrollTo("Home", {
  //       duration: 500,
  //       delay: 2,
  //       smooth: true
  //     });
  //   };

  render() {
    return (
      <Element name="NavBar">
        <NavWrapper>
          <NavContainer>
            <CostumLink
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </CostumLink>
            <CostumLink
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </CostumLink>
            <CostumLink
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </CostumLink>
            <CostumLink
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </CostumLink>
          </NavContainer>
        </NavWrapper>
      </Element>
    );
  }
}

export default Navigation;

const NavWrapper = styled.div`
  max-width: 100%;
  height: 80px;
  background: #ffc21c;
  border-bottom: 3px dotted #e5e5e5;
  box-shadow: inset 0 -1px 0 0 #e5e5e5, inset 0 1px 0 0 #e5e5e5,
    0 1px 0 0 #e5e5e5, 0 -1px 0;
`;

const NavContainer = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const CostumLink = styled(Link)`
  color: blue;
  padding: 10px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3%;
    background-color: red;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: left;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4%;
    background-color: red;
    transform: scaleX(0);
    transition: all 0.5s;
    transform-origin: right;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  &:hover:after {
    transform: scaleX(1);
  }

  &.active {
    color: red;
    background-color: #FAFAD2;
    font-size: 16px;
    padding: 16px;
    border-radius: 40%;
  }
`;
