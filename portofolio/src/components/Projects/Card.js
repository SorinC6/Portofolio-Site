import React from "react";
import styled from "styled-components";
import { SocialWrapper, AWrapper } from "./ProjectStyles";

const Card = ({
  backgroundImg,
  deployment,
  gitHubLink,
  title,
  text,
  video,
  point1,
  point2
}) => {
  console.log(backgroundImg);
  return (
    <>
      <CardWrapper bg={backgroundImg}>
        <TopSection>
          <GetStarted href={deployment} target="_blank">
            View
          </GetStarted>
          {video && (
            <VideoWrapper href={video} target="_blank">
              Video
            </VideoWrapper>
          )}

          <h1>{title}</h1>
          <Social>
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </Social>
        </TopSection>
        <a href={deployment} target="_blank">
          <img src={backgroundImg} alt="" />
        </a>
        {/* <span bg={backgroundImg} /> */}
        <div>
          {/* <h1>{title}</h1> */}
          <p>{text}</p>
        </div>
      </CardWrapper>
    </>
  );
};

export default Card;

const CardWrapper = styled.div`
  margin: 20px;
  width: 550px;
  height: 380px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  img {
    max-width: 100%;
    height: 400px;
    transition: transform 1s;
  }
  &:hover {
    div:first-child {
      background: rgba(0, 109, 156, 0.95);
    }
    i {
      visibility: visible;
    }

    a {
      visibility: visible;
    }
  }

  div:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: transparent;
    transform: translateY(100%);
    transition: all 1s;
    p {
      max-width: 95%;
    }
  }
  &:hover div {
    transform: translateY(0);
  }
  &:hover img {
    transform: translateY(-50%);
  }
`;

const Social = styled.span``;

const TopSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  width: 100%;
  top: 0;
  background: rgba(0, 109, 156, 0.8);
  padding: 10px;
  text-align: center;
  transition: all 1s;

  h1 {
    font-family: "Special Elite", cursive;
    margin: 0;
  }

  i {
    font-size: 40px;
    color: white;
    visibility: hidden;
  }
`;

const VideoWrapper = styled.a`
  visibility: hidden;
  padding: 10px 15px;
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
    background-color: #006d9c;
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

const GetStarted = styled.a`
  padding: 10px 15px;
  background-color: transparent;
  text-align: center;
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
    /* font-size: 17px;
    width: 200px; */
  }
  &:hover {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
  }
`;
