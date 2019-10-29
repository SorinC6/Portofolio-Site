import styled from "styled-components";
import { Button } from "semantic-ui-react";
export const ContactWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  background: ${props => props.theme.contactBackground};
  height: 700px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  h3 {
    margin: 0;
    margin-top: 80px;
    font-size: 33px;
  }
  h4 {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2/rip.svg) bottom
    center;
  background-size: 150%;

  @media (max-width: 500px) {
    padding: 20px 0;
    width: 90%;
  }

  input {
    text-align: justify;
    padding: 13px 20px;
    font-size: 16px;
    margin: 10px;
    border-radius: 10px;
    outline: none;
    max-width: 80%;

    @media (max-width: 500px) {
      margin: 10px 0;
      width: 100%;
    }
  }
  textarea {
    height: 120px;
    padding: 20px;
    font-size: 16px;
    margin-bottom: 10px;
    width: 60%;
    outline: none;
    border-radius: 10px;

    @media (max-width: 500px) {
      margin: 10px 0;
      width: 80%;
    }
  }

  button {
    padding: 20px 30px;
    width: 60%;
    border-radius: 20px;
    outline: none;
    font-size: 16px;
    transition: 1s all;
    &:hover {
      color: white;
      background: darkgreen;
      cursor: crosshair;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const AWrapper = styled.a`
  font-size: 60px;
  padding: 10px 20px;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
`;

export const ButtonWrapper = styled(Button)`
  &:hover {
    color: ${props => props.theme.background};
  }
`;

export const TextWrap = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      color: lightgrey;
      font-size: 40px;
      margin-top: 100px;
      letter-spacing: 15px;
      animation: lighting 2s linear infinite;
      &:nth-child(1) {
        animation-delay: 0;
      }
      &:nth-child(2) {
        animation-delay: 0.1s;
      }
      &:nth-child(3) {
        animation-delay: 0.2s;
      }
      &:nth-child(4) {
        animation-delay: 0.3s;
      }
      &:nth-child(5) {
        animation-delay: 0.4s;
      }
      &:nth-child(6) {
        animation-delay: 0.5s;
      }
      &:nth-child(8) {
        animation-delay: 0.7s;
      }
      &:nth-child(9) {
        animation-delay: 0.8s;
      }
    }
  }
  @keyframes lighting {
    0% {
      color: grey;
      text-shadow: none;
    }
    90% {
      color: grey;
      text-shadow: none;
    }
    100% {
      color: yellow;
      text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
    }
  }
`;
