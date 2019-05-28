import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: darkred;
  height: 100vh;
`;

export const TextWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;

  h2 {
    margin: 10px;
    font-size: 40px;
    letter-spacing: 10px;
    color: darkgray;
    text-align: center;
  }

  button {
    padding: 10px 20px;
    margin: 20px;
    font-size: 20px;
  }
`;

export const NameWrapper = styled.h1`
  margin: 30px;
  font-size: 55px;
  letter-spacing: 22px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 1px 0 #efefef, 0 2px 0 #efefef, 0 3px 0 #efefef,
    0 4px 0 #efefef, 0 30px 5px rgba(0, 0, 0, 0.1);
  animation: float 2s linear infinite;
  animation-direction: alternate;

  @keyframes float {
    from {
      transform: rotate(5deg);
    }
    to {
      transform: rotate(-5deg);
    }
  }
`;

export const ButtonWrapper = styled.a`
  margin: 20px;
  text-decoration: none;
  color: white;
  font-family: sans-serif;
  font-size: 30px;
  border: 3px solid white;
  border-radius: 10px;
  padding: 20px 40px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 1s border-radius;
  &:hover {
    border-radius: 20px;
  }
  &:before {
    content: "";
    background: red;
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    z-index: -1;
    transform: skew(-15deg);
    animation: moving 1.2s linear infinite;
    transition: all 0.5s;
  }
  &:hover:before {
    width: 100%;
    transform: skew(0deg);
    animation: none;
    background: darkgoldenrod;
  }
  @keyframes moving {
    from {
      left: -120px;
    }
    to {
      left: 100%;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 140px;
  position: relative;
  z-index: 1;
`;

export const AWrapper = styled.a`
  font-size: 60px;
  padding: 10px 20px;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
