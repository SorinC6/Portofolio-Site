import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Roll from "react-reveal/Roll";

import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const Skills = ({ value, img, name }) => {
  return (
    <SkillsWrapper>
      <Roll left>
        <CircularProgressbarWithChildren value={value}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <i className={`fab fa-${name}`} />
        </CircularProgressbarWithChildren>
      </Roll>
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div`
  width: 70px;
  margin: 10px;


`;
