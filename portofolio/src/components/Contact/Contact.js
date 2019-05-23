import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="Contact">
      <ContactWrapper>
        <h4>Contact Info here</h4>
      </ContactWrapper>
    </Element>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  height: 1000px;
  background: lightgreen;

  h4 {
    margin: 0;
  }
`;
