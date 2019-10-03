import React from "react";
import ReactModal from "react-modal";
import {
  overlay,
  content,
  ModalContent,
  SocialWrapper,
  AWrapper,
  Button
} from "./ProjectStyles";

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
        <a href={link} target="_blank">
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
