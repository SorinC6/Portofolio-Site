import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h4>MyProjects here</h4>
      </ProjectsWrapper>
    </Element>
  );
};

export default Projects;

const ProjectsWrapper = styled.div`
  height: 1000px;
  background: lightpink;

  h4 {
    margin: 0;
  }
`;
