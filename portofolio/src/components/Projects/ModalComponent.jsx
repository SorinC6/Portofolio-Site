import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const ModalComponent = ({
  isOpen,
  close,
  img,
  title,
  description,
  link,
  gitHubLink
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      style={{ overlay, content }}
      ariaHideApp={false}
    >
      <ModalContent href={link}>
        <a href={link}>
          <img src={img} alt="imagine" />
          <h4>{title}</h4>
          <p>{description}</p>
        </a>
        <SocialWrapper>
          <AWrapper href={gitHubLink} target="_blank">
            <i className="fab fa-github" />
          </AWrapper>
        </SocialWrapper>
        <Button onClick={close}>Cancel</Button>
      </ModalContent>
    </ReactModal>
  );
};

export default ModalComponent;

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
  maxWidth: "300px",
  margin: "0 auto",
  padding: "1rem 1rem",
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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-decoration: none;
    img {
      width: 200px;
      height: 230px;
    }

    h4 {
      margin: 10px;
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const AWrapper = styled.a`
  font-size: 32px;
  padding: 10px 20px;
  border-radius: 50%;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
`;
