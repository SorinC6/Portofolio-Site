import styled from "styled-components";
import { Blob } from "react-blob";

export const AboutWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Signika&display=swap");
  font-family: "Signika", sans-serif;
  background: white;
  padding: 100px 0px;

  h3 {
    font-size: 30px;
    margin: 20px;
    font-family: "Signika", sans-serif;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled(Blob)`
  border-radius: 50%;
  width: 200px;
  transition: transform 1s;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-evenly;
  padding: 0 50px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55%;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 100%;
    text-align: justify;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 17px;
    padding: 10px;
    text-align: justify;
  }
`;

export const ResumeButton = styled.a`
  color: black;
  font-family: sans-serif;
  margin-top: 10px;
  text-decoration: none;
  font-size: 20px;
  border: 1px solid black;
  padding: 10px 20px;
  transition: all 0.5s;
  &:hover {
    border: 1px solid ${props => props.theme.h2};
    color: ${props => props.theme.primary};
    background: ${props => props.theme.background};
    animation: shake 0.4s linear 1;
    cursor: pointer;
  }
  @keyframes shake {
    33% {
      transform: rotate(7deg);
    }
    66% {
      transform: rotate(-7deg);
    }
    100% {
      transform: rotate(7deg);
    }
  }
`;

export const BuildWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const TextSwitch = styled.h1`
  margin-bottom: 70px;
  text-align: center;
  font-size: 20px;
  span:before {
    content: "TRANSITION";
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    color: darkslateblue;
    animation: words 6s infinite;
  }
  @keyframes words {
    0% {
      content: "React";
    }
    50% {
      content: "Node";
    }
    100% {
      content: "Animation";
    }
  }
`;

export const IconWrapper = styled.div`
  margin: 60px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 100px;
  background-color: ${props => props.theme.background};
  color: white;
  opacity: 0.9;
  padding: 20px 10px;
  i {
    font-size: 38px;
  }
`;
