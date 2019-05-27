import React from "react";
import { PDFObject } from "react-pdfobject";
import resume from "../assets/Resume.pdf";
import ReactModal from "react-modal";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";
const PDF = ({ trigger, close }) => {
  const customStyles = {
    content: {
      top: "80%",
      left: "20%",
      right: "20%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  return (
    <Bounce left>
      <ReactModal
        isOpen={trigger}
        onRequestClose={close}
        style={{ overlay, content }}
        ariaHideApp={false}
      >
        <PDFObject url={resume} height="1080px" id="pdf-test" />
        <Button onClick={close}>Cancel</Button>
      </ReactModal>
    </Bounce>
  );
};

export default PDF;

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 300
};

const content = {
  position: "absolute",
  maxWidth: "800px",
  margin: "2rem auto 0 auto",
  padding: "2rem 4rem",
  borderRadius: "0.5rem",
  border: "1px solid #161c24",
  background: "darkred",
  overflow: "auto",
  WebkitOverflowScrolling: "touch",
  outline: "none",
  zIndex: "200"
};

const Button = styled.button`
  margin-top: 1.5rem;
  background: #212b38;
  border: 0;
  width: 100%;
  height: 4rem;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  &:hover {
    background: #85bdbf;
  }
`;
