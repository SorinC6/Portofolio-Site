import React, { useState } from "react";
import styled from "styled-components";
import ModalComponent from "./ModalComponent";
import Roll from "react-reveal/Roll";

const ProjectCard = ({ img, title, description, link, gitHubLink }) => {
  const [openModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!openModal);
  };
  const close = () => {
    setModal(false);
  };
  return (
    <Roll bottom>
      <MainWrapper onClick={toggleModal}>
        <img src={img} alt="imagine" />
        <div>
          <h1>Click For Detail</h1>
        </div>
        <ModalComponent
          isOpen={openModal}
          close={close}
          img={img}
          title={title}
          description={description}
          link={link}
          gitHubLink={gitHubLink}
        />
      </MainWrapper>
    </Roll>
  );
};

export default ProjectCard;

const MainWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Mandali&display=swap");
  font-family: "Mandali", sans-serif;
  height: 400px;
  width: 300px;
  background-color: red;
  margin: 30px 10px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.5s;
  background: rgba(0, 0, 0, 0);
  overflow: hidden;
  z-index: 0;
  border-radius: 20px;
  img {
    width: 100%;
    height: auto;
    transition: all 1s;
  }
  div {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: all 0.6s;
    h1 {
      text-transform: uppercase;
      margin: 0;
      font-size: 25px;
    }

    &:hover {
      opacity: 0.7;
      color: white;
      background: rgba(0, 0, 0, 0.7);
      cursor: cell;
    }
  }
  &:hover img {
    transform: scale(1.3) rotate(15deg);
  }
`;
