import styled from "styled-components";
import { darken } from "polished";
export const HomeWrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  position: relative;
`;

export const TextWrapper = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 30%;

  @media (max-width: 1000px) {
    top: 10%;
  }

  h2 {
    margin: 10px;
    font-size: 25px;
    letter-spacing: 10px;
    color: ${props => props.theme.h2};
    text-align: center;
    cursor: cell;
  }

  button {
    padding: 10px 20px;
    margin: 20px;
    font-size: 20px;
  }
`;

export const NameWrapper = styled.h1`
  margin: 30px;
  font-size: 50px;
  letter-spacing: 22px;
  /* font-weight: bold; */
  text-align: center;
  /* text-shadow: 0 1px 0 #666564, 0 2px 0 #666564, 0 3px 0 #666564,
    0 4px 0 #666564, 0 30px 5px rgba(0, 0, 0, 0.1); */
  animation: float 2s linear infinite;
  animation-direction: alternate;
  cursor: cell;
  color: ${props => props.theme.primary};
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
  margin: 40px;
  text-decoration: none;
  color: ${props => props.theme.primary};
  font-family: sans-serif;
  font-size: 25px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 1s border-radius;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    border-radius: 20px;
    cursor: pointer;
  }
  &:before {
    content: "";
    background: ${darken(0.04, "#0091cf")};
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
    background: ${props => props.theme.background};
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
  width: 100px;
  position: relative;
  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
    margin-top: 100px;
  }
`;

export const AWrapper = styled.a`
  font-size: 40px;
  padding: 10px 20px;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
  margin: 10px;
  transition: 500ms all;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const ProjectPreview = styled.div`
  position: absolute;
  right: 5%;
  top: 30%;
  margin-top: ${props => props.top};
  transform: rotate(12deg);
  font-weight: 700;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png");
  -webkit-mask-size: 944px 604px;
  mix-blend-mode: multiply;

  @media (max-width: 800px) {
    display: none;
  }

  color: grey;
  border: 0.5rem solid grey;
  -webkit-mask-position: 13rem 6rem;
  transform: rotate(-14deg);
  border-radius: 0;

  h4 {
    font-size: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;
