import styled from "styled-components";

//======================PROJECT STYLES==================

export const ProjectsWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  padding-top: 100px;
  background: #f2a359;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 100%;

  h4 {
    font-size: 40px;
  }
  h5 {
    margin: 0;
    font-size: 30px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  max-width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: space;
  flex-wrap: wrap;
  div {
  }
`;

//======================PROJECT CARD STYLES================

export const MainWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Mandali&display=swap");
  font-family: "Mandali", sans-serif;
  height: 400px;
  width: 300px;
  background-color: red;
  margin: 30px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  z-index: 0;
  border-radius: 20px;
  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }
  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    h1 {
      text-transform: uppercase;
      margin: 0;
      font-size: 25px;
    }

    @media (max-width: 500px) {
      opacity: 0.7;
      color: white;
      background: rgba(0, 0, 0, 0.7);
      cursor: cell;
      h1 {
        content: "Press for details";
      }
    }

    &:hover {
      opacity: 0.7;
      color: white;
      background: rgba(0, 0, 0, 0.7);
      cursor: cell;
    }
  }
  &:hover img {
    transform: scale(1.3) rotate(15deg);
  }
`;

//=========================MODAL STYLES=======================

export const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 300
};

export const content = {
  position: "absolute",
  maxWidth: "300px",
  margin: "0 auto",
  padding: "1rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid #161c24",
  background: "darkred",
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  outline: "none",
  zIndex: "200"
};

export const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 100%;
  height: 4rem;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
    img {
      width: 200px;
      height: 230px;
    }

    h4 {
      margin: 10px;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const AWrapper = styled.a`
  font-size: 32px;
  padding: 10px 20px;
  border-radius: 50%;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
  transition: 500ms all;
`;
