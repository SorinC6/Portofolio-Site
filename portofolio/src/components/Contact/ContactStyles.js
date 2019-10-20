import styled from "styled-components";
import { Button } from "semantic-ui-react";
export const ContactWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  background: ${props => props.theme.contactBackground};
  height: 800px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 10px #4171;

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
    height: 100px;
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
