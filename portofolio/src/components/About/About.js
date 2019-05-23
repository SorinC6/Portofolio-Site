import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

class About extends Component {
  state = {
    modal: false
  };

  render() {
    return (
      <Element name="About">
        <AboutWrapper>
          <ContentWrapper>
            <h3>About Me</h3>
            <p>Image and description, resume here</p>
            <p>What I build</p>
          </ContentWrapper>
        </AboutWrapper>
      </Element>
    );
  }
}

export default About;

const AboutWrapper = styled.div`
  background: darkgoldenrod;
  padding: 100px 50px;
  height: 1000px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
