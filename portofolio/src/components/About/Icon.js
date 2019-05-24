import React from "react";
import styled from "styled-components";

const Icon = ({ cls, name, description }) => {
  return (
    <Wrapper>
      <i className={cls} />
      <p>{name}</p>
      <p>{description}</p>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:120px;
  i {
    font-size: 60px;
    color: darkkhaki;
    transition: 1s all;
    &:hover {
      color: darkred;
    }
  }
`;
