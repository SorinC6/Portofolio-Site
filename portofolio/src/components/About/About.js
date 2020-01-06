import React, { useState } from "react";
import { Element } from "react-scroll";
import profileImg from "../assets/profile.jpg";
import Flip from "react-reveal/Flip";
import Icon from "./Icon";
import PDF from "../PdfComponent/PDF";
import Skills from "./Skills";
import Particles from "../Particles/index";
import handleViewport from "react-in-viewport";

import reduxSvg from "../assets/svg/redux.svg";
import nextSvg from "../assets/svg/next.svg";
import jsSvg from "../assets/svg/javascript.svg";
import nodeSvg from "../assets/svg/node.svg";
import gatsbySvg from "../assets/svg/gatsby.svg";
import reactSvg from "../assets/svg/react.svg";

import {
  AboutWrapper,
  ContentWrapper,
  ProfileImg,
  Description,
  TextContainer,
  ResumeButton,
  BuildWrapper,
  TextSwitch,
  IconWrapper,
  SkillsWrapper
} from "./AboutStyles";

const About = props => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Element name="About">
      <AboutWrapper>
        <PDF trigger={modal} close={closeModal} />
        <ContentWrapper>
          <h3>About Me</h3>
          <Description>
            <ProfileImg src={profileImg} alt="profile" />
            <TextContainer>
              <Flip left>
                <p>
                  Fanatical about clean and organized code as a tool for
                  breathing life into ideas. With the browser as a canvas and
                  the latest full-stack web technologies as the medium, my end
                  goal is practical problem solving that transforms the lives of
                  real people.
                </p>
              </Flip>
              <ResumeButton onClick={toggleModal}>RESUME HERE</ResumeButton>
            </TextContainer>
          </Description>
          <SkillsWrapper>
            {/* <Particles /> */}
            <Skills name="js" value={jsSvg} />
            <Skills name="react" value={reactSvg} />
            <Skills name="redux" value={reduxSvg} />
            <Skills name="node" value={nodeSvg} />
            <Skills name="next" value={nextSvg} />
            <Skills name="gatsby" value={gatsbySvg} />
            {/* <Skills name="react" value={reactSvg} /> */}
            {/* <Skills name="html5" />
            <Skills name="css3" /> */}
          </SkillsWrapper>
          <BuildWrapper>
            <TextSwitch>
              I Love <span />
            </TextSwitch>
            <IconWrapper>
              <Icon
                cls="fas fa-mobile-alt"
                name="Responsive"
                description="My layouts will work on any device, big or small."
              />
              <Icon
                cls="fas fa-hourglass-start"
                name="Fast"
                description="Fast load times and lag free interaction, my highest priority."
              />
              <Icon
                cls="fas fa-user-shield"
                name="Secure"
                description="Unhackable systems architecture"
              />
              <Icon
                cls="fas fa-rocket"
                name="Scalable"
                description="Websites don't have to be static, I love making pages come to life."
              />
              <Icon
                cls="fas fa-star-of-life"
                name="Dynamic"
                description="I believe in easy to use, intuitive UX/UI."
              />
            </IconWrapper>
          </BuildWrapper>
        </ContentWrapper>
      </AboutWrapper>
    </Element>
  );
};

const MySection = handleViewport(About, { rootMargin: "-1.0px" });

export default MySection;
