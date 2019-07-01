import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const Skills = ({ value, img, name }) => {
  const percentage = 66;

  return (
    <SkillsWrapper>
      <CircularProgressbarWithChildren value={value}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img style={{ width: 70, marginTop: -5 }} src={img} alt="name" />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{name}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div`
  width: 100px;
`;
