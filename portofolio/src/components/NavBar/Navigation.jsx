import React, { useContext } from "react";
import { Element, Link } from "react-scroll";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";
import Context from "../context";

const Navigation = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state);

  return (
    <Element name="NavBar">
      <LightSpeed cascade>
        <NavWrapper color={state.navColor}>
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
      </LightSpeed>
    </Element>
  );
};

export default Navigation;

const NavWrapper = styled.div`
  max-width: 100%;
  height: 80px;
  /* background: #ffc21c; */
  border-bottom: 3px dotted #e5e5e5;
  box-shadow: inset 0 -1px 0 0 #e5e5e5, inset 0 1px 0 0 #e5e5e5,
    0 1px 0 0 #e5e5e5, 0 -1px 0;
  z-index: 200;
  background-color: ${props => props.color};
`;

const NavContainer = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  position: relative;
  transition: 1s all;
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
    background-color: #fafad2;
    font-size: 16px;
    padding: 16px;
    border-radius: 40%;
  }
`;
