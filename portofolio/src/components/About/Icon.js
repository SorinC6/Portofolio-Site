import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Icon = ({ cls, name, description }) => {
  return (
    <Fade bottom>
      <Wrapper>
        <i className={cls} />
        <p>{name}</p>
        <p>{description}</p>
      </Wrapper>
    </Fade>
  );
};

export default Icon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  position: relative;
  margin-top: 20px;
  z-index: -10;
  p:nth-of-type(1) {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  p:nth-of-type(2) {
    margin: 0;
  }
  i {
    font-size: 60px;
    color: darkkhaki;
    transition: 1s all;
    &:hover {
      color: darkred;
    }
  }
`;
