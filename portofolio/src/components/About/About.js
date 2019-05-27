import React, { Component } from "react";
import { Element } from "react-scroll";
import profileImg from "../assets/profile.jpg";
import Flip from "react-reveal/Flip";
import Icon from "./Icon";
import PDF from "../PdfComponent/PDF";
import {
  AboutWrapper,
  ContentWrapper,
  ProfileImg,
  Description,
  TextContainer,
  ResumeButton,
  BuildWrapper,
  TextSwitch,
  IconWrapper
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
            <BuildWrapper>
              <TextSwitch>
                I Love <span />
              </TextSwitch>
              <IconWrapper>
                <Icon
                  cls="fas fa-mobile-alt"
                  name="Responsive"
                  description="Blazing fast load times & lag-free interaction"
                />
                <Icon
                  cls="fas fa-hourglass-start"
                  name="Fast"
                  description="Blazing fast load times & lag-free interaction"
                />
                <Icon
                  cls="fas fa-user-shield"
                  name="Secure"
                  description="Blazing fast load times & lag-free interaction"
                />
                <Icon
                  cls="fas fa-rocket"
                  name="Scalable"
                  description="Blazing fast load times & lag-free interaction"
                />
                <Icon
                  cls="fas fa-star-of-life"
                  name="...."
                  description="Blazing fast load times & lag-free interaction"
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
