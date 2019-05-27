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
`;

const NavContainer = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const CostumLink = styled(Link)`
  color: blue;
  padding: 10px;
  cursor: pointer;
  &.active {
    color: red;
    background-color: #6ed3cf;
    font-size: 16px;
    border-radius: 50%;
  }
`;
