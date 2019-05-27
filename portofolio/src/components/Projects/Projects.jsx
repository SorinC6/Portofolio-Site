import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h4>Portofolio</h4>
        <h5>Some of my Work so far</h5>
        <CardsWrapper>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </CardsWrapper>
      </ProjectsWrapper>
    </Element>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Monda|Special+Elite&display=swap");
  font-family: "Special Elite", cursive;
  padding-top: 100px;
  background: lightpink;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 40px;
  }
  h5 {
    margin: 0;
    font-size: 30px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  max-width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    height: 200px;
    width: 200px;
    background-color: red;
    margin: 20px;
  }
`;
