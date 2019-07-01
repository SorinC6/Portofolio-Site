import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const Skills = () => {
  const percentage = 66;

  return (
    <SkillsWrapper>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={`${value * 100}%`}
      />
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7"
        })}
      />
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div``;
