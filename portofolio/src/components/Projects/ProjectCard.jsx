import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Roll from "react-reveal/Roll";
import { MainWrapper } from "./ProjectStyles";

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
