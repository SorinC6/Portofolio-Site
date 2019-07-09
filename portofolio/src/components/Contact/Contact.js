import React, { Component } from "react";
import { Element } from "react-scroll";
import Slide from "react-reveal/Slide";
import axios from "axios";
import { ContactWrapper, Form, SocialWrapper, AWrapper } from "./ContactStyles";
import { Button, Header, Modal, Input } from "semantic-ui-react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    openModal: false,
    modalTitle: "",
    modalContent: "",
    loading: false
  };

  setLoadingTrue = () => {
    this.setState({
      loading: true
    });
  };
  setLoadingFalse = () => {
    this.setState({
      loading: false
    });
  };

  sendMessage = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const goodInputsField =
      name.length > 0 &&
      email.length > 0 &&
      email.includes("@") &&
      email.includes(".") &&
      message.length > 0;

    if (goodInputsField) {
      this.setLoadingTrue();
      try {
        axios
          .get(
            `https://portofolio-server.herokuapp.com/send-email?recipient=kish.sorin@yahoo.com&sender=${email}&topic=${name}&text=${message}`
          )
          .then(() => {
            this.setLoadingFalse();
            this.setState({
              openModal: true,
              modalTitle: "Thank you, Message was sent",
              modalContent: "Hey! Thanks for contacting me !"
            });
            setTimeout(() => {
              this.clearInput();
              this.setState({
                openModal: false
              });
            }, 3000);
          })
          .catch(err => console.log(err));
      } catch (error) {
        this.setLoadingFalse();
      }
    } else {
      this.setState({
        openModal: true,
        modalTitle: "Message was not sent",
        modalContent: "Please provide all fields and a valid email adress"
      });
      setTimeout(() => {
        this.clearInput();
        this.setState({
          openModal: false
        });
      }, 3000);
    }
  };
  clearInput = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };
  onChangeHendler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Element name="Contact">
        <ContactWrapper>
          <Slide top>
            <h3>Contact Me</h3>
            <h4>Interest in working thogether?</h4>
          </Slide>

          <Form onSubmit={this.sendMessage}>
            <Slide left>
              <input
                placeholder="&#9786; Name"
                onChange={this.onChangeHendler}
                name="name"
                value={this.state.name}
              />

              <input
                placeholder="&#128236; Email"
                onChange={this.onChangeHendler}
                name="email"
                value={this.state.email}
              />
            </Slide>
            <Slide right>
              <textarea
                placeholder="&#128495;  Message"
                onChange={this.onChangeHendler}
                name="message"
                value={this.state.message}
              />
              <Button
                inverted
                color="blue"
                type="submit"
                size="huge"
                fluid
                loading={this.state.loading}
              >
                Send Message
              </Button>
            </Slide>
          </Form>
          <Slide bottom>
            <SocialWrapper>
              <AWrapper href="https://github.com/SorinC6" target="_blank">
                <i className="fab fa-github" />
              </AWrapper>
              <AWrapper href="www.linkedin.com/in/sorinchis/" target="_blank">
                <i className="fab fa-linkedin" />
              </AWrapper>
            </SocialWrapper>
          </Slide>
          <Slide bottom>
            <p>- Chis Sorin Portofolo Site -</p>
          </Slide>
          <Modal open={this.state.openModal} basic size="small">
            <Header icon="talk" content={this.state.modalTitle} />
            <Modal.Content>
              <p style={{ fontSize: 30 }}>{this.state.modalContent}</p>
            </Modal.Content>
          </Modal>
        </ContactWrapper>
      </Element>
    );
  }
}

export default Contact;
