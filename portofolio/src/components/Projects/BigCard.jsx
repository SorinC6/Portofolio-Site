import React from "react";
import Flip from "react-reveal/Flip";
import styled, { css } from "styled-components";

const BigCard = () => {
  return (
    <MissionContainer>
      <Flip bottom>
        <Article>
          <Title>Unsilenced</Title>
          <p>
            Comments disabled? Not anymore. Take back the conversation with your
            own Unsilenced Space. Add a simple link to your video description to
            provide an enhanced viewing experience for your visitors, complete
            with comments. Moderated and unmoderated options available.
          </p>
          <GetStarted href="https://unsilenced.space/" target="_blank">
            View Project
          </GetStarted>
        </Article>
      </Flip>
    </MissionContainer>
  );
};

export default BigCard;

const BigCardWrapper = styled.div`
  width: 80%;
`;

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
  max-width: 80%;
  height: 400px;
  margin-top: 50px;
  @media (max-width: 500px) {
    height: 700px;
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
    font-size: 1.3rem;

    @media (max-width: 500px) {
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
  width: 280px;
  height: 57px;
  padding: 0.4rem 2rem;
  background-color: #fff;
  text-align: center;
  line-height: 35px;
  font-weight: 400;
  font-size: 1.8rem;
  color: darkred;
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 30px;
  letter-spacing: 20px;
  padding: 20px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
