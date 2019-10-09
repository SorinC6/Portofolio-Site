import React from "react";
import Flip from "react-reveal/Flip";
import styled, { css } from "styled-components";
import { SocialWrapper, AWrapper } from "./ProjectStyles";

const BigCard = ({
  title,
  text,
  deployment,
  gitHubLink,
  background,
  video
}) => {
  return (
    <MissionContainer background={background}>
      <Flip bottom>
        <Article>
          <Title>={title}</Title>
          <p>{text}</p>
          <GetStarted href={deployment} target="_blank">
            View Project
          </GetStarted>
          {video && (
            <VideoWrapper href={video} target="_blank">
              Video Presentation
            </VideoWrapper>
          )}
          <SocialWrapper>
            <AWrapper href={gitHubLink} target="_blank">
              <i className="fab fa-github" />
            </AWrapper>
          </SocialWrapper>
        </Article>
      </Flip>
    </MissionContainer>
  );
};

export default BigCard;

// const BigCardWrapper = styled.div`
//   width: 80%;
// `;

const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;

const MissionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.background ? props.background : "darkred"};
  flex-wrap: nowrap;
  max-width: 65%;
  height: 100%;
  margin-top: 50px;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(123, 122, 170, 0.7);

  transition: all 500ms;

  @media (max-width: 800px) {
    height: 100%;
  }
  @media (max-width: 500px) {
    max-width: 90%;
  }

  &:hover {
    transform: scale(1.015);
    box-shadow: 0 20px 50px rgba(59, 43, 91, 0.7);
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightcyan;
  width: 60%;
  margin: auto;
  padding: 1rem;
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    line-height: 1.5;
    text-align: justify;
    padding-top: 1rem;
    font-size: 1.1rem;
    @media (max-width: 500px) {
      width: 250px;
    }

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  h2 {
    position: relative;
    padding-bottom: 2rem;
    font-size: 3rem;
    font-weight: bold;
    &::after {
      content: " ";
      position: absolute;
      height: 2px;
      width: 30%;
      background-color: lightgray;
      bottom: 0;
      right: 30%;
    }
    &:hover {
      color: grey;
      ${transition};
    }
  }
`;

const GetStarted = styled.a`
  margin-top: 2rem;

  width: 220px;
  height: 40px;
  padding: 0.4rem 2rem;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  font-weight: 400;
  font-size: 1.3rem;
  color: darkred;
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    font-size: 17px;
    width: 200px;
  }
  &:hover {
    background: black;
    border: 2px solid #fff;
    color: #fff;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
  }
`;
const Title = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
  font-family: "Monoton", cursive;
  width: 500px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 15px;
  padding: 20px;

  @media (max-width: 800px) {
    font-size: 17px;
    letter-spacing: 13px;
  }
`;

const VideoWrapper = styled.a`
  padding: 12px 22px;
  margin: 20px;
  font-family: sans-serif;
  text-decoration: none;
  color: #262626;
  font-size: 17px;
  letter-spacing: 2px;
  border: 2px dashed #262626;
  position: relative;
  transition: 1s;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: purple;
    z-index: -1;
    transition: 1s;
    transform: rotateX(90deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: purple;
    z-index: -1;
    transition: 1s;
    transform: rotateY(90deg);
  }
  &:hover:before {
    transform: rotateX(0deg);
  }
  &:hover:after {
    transform: rotateY(0deg);
  }
  &:hover {
    color: white;
  }
`;
