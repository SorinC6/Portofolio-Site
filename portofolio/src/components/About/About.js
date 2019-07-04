import React, { Component } from "react";
import { Element } from "react-scroll";
import profileImg from "../assets/profile.jpg";
import Flip from "react-reveal/Flip";
import Icon from "./Icon";
import PDF from "../PdfComponent/PDF";
import Skills from "./Skills";
import reactlogo from "../assets/reactlogo.jpg";
import nodelogo from "../assets/nodelogo.jpg";
import javalogo from "../assets/javalogo.png";
import reduxlogo from "../assets/reduxlogo.png";
import jslogo from "../assets/jslogo.jpg";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import Particles from "../Particles/index";

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

class About extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <Element name="About">
        <AboutWrapper>
          <PDF trigger={this.state.modal} close={this.closeModal} />
          <ContentWrapper>
            <h3>About Me</h3>
            <Description>
              <ProfileImg src={profileImg} alt="profile" />
              <TextContainer>
                <Flip left>
                  <p>
                    Enthusiast programmer, passionate about clean and organized
                    code. I aim to know and work with the newest fullstack web
                    development technologies.
                  </p>
                </Flip>
                <ResumeButton onClick={this.toggleModal}>
                  RESUME HERE
                </ResumeButton>
              </TextContainer>
            </Description>
            <SkillsWrapper>
              <Particles />
              <Skills name="js" value="70" />
              <Skills name="react" value="90" />
              <Skills name="node" value="80" />
              {/* <Skills name="Redux" img={reduxlogo} name="Redux" value="85" /> */}
              <Skills name="java" value="60" />
              <Skills name="html5" value="95" />
              <Skills name="css3" value="90" />
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
  }
}

export default About;
