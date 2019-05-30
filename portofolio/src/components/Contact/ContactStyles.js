import styled from "styled-components";

export const ContactWrapper = styled.div`
  background: lightgreen;
  height: 800px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-top: 80px;
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
  box-shadow: 0 15px 10px #777;

  input {
    text-align: justify;
    padding: 13px 20px;
    font-size: 16px;
    margin: 10px;
    border-radius: 10px;
    outline: none;
  }
  textarea {
    height: 100px;
    padding: 20px;
    font-size: 16px;
    margin-bottom: 10px;
    width: 60%;
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
