import styled from "styled-components";

export const AboutWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Signika&display=swap");
  font-family: "Signika", sans-serif;
  background: white;
  padding: 100px 0px;

  h3 {
    font-size: 30px;
    margin: 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 300px;
  transition: transform 1s;

  &:hover {
    transform: scale(1.2) rotate(9deg);
    @media (max-width: 400px) {
      transform: none;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
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
    font-size: 20px;
    padding: 10px;
  }
`;

export const ResumeButton = styled.a`
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

export const BuildWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
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
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  background-color: darkred;
  border: 1px solid black;
  color: white;
  padding: 40px 10px;
  i {
    font-size: 70px;
  }
`;
