import React, { Component } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import profileImg from "../assets/profile.jpg";
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
                  <p>
                    Enthusiast programmer, passionate about clean and organized
                    code. I aim to know and work with the newest fullstack web
                    development technologies.
                  </p>
                </Flip>
                <ResumeButton>RESUME HERE</ResumeButton>
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
  height: auto;
  overflow: hidden;
  transition: transform 1s;
  &:hover {
    transform: scale(1.2) rotate(9deg);
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`;

const TextContainer = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  align-items: center;
  p {
    font-size: 20px;
    padding: 10px;
  }
`;

const ResumeButton = styled.a`
  color: black;
  font-family: sans-serif;
  margin-top: 10px;
  text-decoration: none;
  font-size: 20px;
  border: 3px solid black;
  padding: 10px 20px;
  transition: all 0.5s;
  &:hover {
    border: 3px solid darkred;
    color: red;
    background: lightslategray;
    animation: shake 0.4s linear 1;
  }
  @keyframes shake {
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
`;
