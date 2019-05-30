import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  padding-top: 100px;
  background: lightpink;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

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
  flex-wrap: wrap;
  position: relative;
  z-index: 0;
  div {
  }
`;
