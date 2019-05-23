import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import profileImg from "../assets/profile.jpg";

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
            <Description>
              <ProfileImg src={profileImg} alt="profile" />
              <p>description, resume here</p>
            </Description>
            <p>What I build</p>
          </ContentWrapper>
        </AboutWrapper>
      </Element>
    );
  }
}

export default About;

const AboutWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Signika&display=swap");
  font-family: "Signika", sans-serif;
  background: darkgoldenrod;
  padding: 100px 50px;
  height: 1000px;

  h3 {
    font-size: 30px;
    margin: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;
