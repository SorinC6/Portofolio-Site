import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import ProjectCard from "./ProjectCard";
import testImg from "../assets/test.png";

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h4>Portofolio</h4>
        <h5>Some of my Work so far</h5>
        <CardsWrapper>
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
          <ProjectCard
            img={testImg}
            title="Book Title"
            description="lorem ipsus lorem ipsus lorem ipsuslorem ipsuslorem ipsus lorem ipsuslorem ipsus"
          />
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
  z-index: 2;

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
  max-width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
  }
`;
