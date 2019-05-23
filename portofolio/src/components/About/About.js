import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import profileImg from "../assets/profile.jpg";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

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
              <TextContainer>
                <Flip left>
                  Enthusiast programmer, passionate about clean and organized
                  code. I aim to know and work with the newest fullstack web
                  development technologies.
                  <button>RESUME HERE</button>
                </Flip>
              </TextContainer>
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
  perspective: 500px;
  @import url("https://fonts.googleapis.com/css?family=Signika&display=swap");
  font-family: "Signika", sans-serif;
  background: white;
  padding: 100px 50px;

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
  overflow: hidden;
  transition: transform 1s;
  &:hover {
    transform: scale(1.2) rotate(9deg);
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;

const TextContainer = styled.p`
  max-width: 55%;
  font-size: 20px;
`;
