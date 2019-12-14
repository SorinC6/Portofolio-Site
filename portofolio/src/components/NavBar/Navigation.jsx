import React, { useContext } from "react";
import { Element, Link } from "react-scroll";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";
import Context from "../context";

const Navigation = () => {
  const { state } = useContext(Context);
  //console.log(state);

  return (
    <Element name="NavBar">
      <LightSpeed cascade>
        <NavWrapper height={state.height}>
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
  display:flex;
  justify-content:flex-end;
  max-width: 100%;
  height: 50px;
  box-shadow: 0px 4px 7px #777;
  z-index: 200;
  background-color: white;
  transition: 1s all;
`;

const NavContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  position: relative;
  transition: 1s all;
  font-family: "Special Elite", cursive;

`;

const CostumLink = styled(Link)`
  color: ${props => props.textColor};
  padding: 10px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3%;
    background-color: ${props => props.theme.background};
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
    background-color: ${props => props.theme.background};
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
    color: black;
    /* background-color: #fafad2; */
    font-size: 16px;
    padding: 10px;
    /* border-radius: 10%; */
    transition: 200ms all;
  }
`;
