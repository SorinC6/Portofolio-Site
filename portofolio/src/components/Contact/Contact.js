import React, { Component } from "react";
import { Element } from "react-scroll";
import Slide from "react-reveal/Slide";
import axios from "axios";
import { ContactWrapper, Form, SocialWrapper, AWrapper } from "./ContactStyles";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    openModal: false,
    modalTitle: "",
    modalContent: ""
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
      console.log(name, email, message);
      try {
        axios
          .get(
            `https://portofolio-server.herokuapp.com/send-email?recipient=kish.sorin@yahoo.com&sender=${email}&topic=${name}&text=${message}`
          )
          .then(() => {
            this.setState({
              openModal: true,
              modalTitle: "Thank you, Message was sent",
              modalContent:
                "Hey! Thanks for contacting me. I'll get back to you soon as I can"
            });
            setTimeout(() => {
              this.setState({
                openModal: false
              });
            }, 3000);
          })
          .catch(err => console.log(err));
      } catch (error) {}
    } else {
      this.setState({
        openModal: true,
        modalTitle: "Message was not sent",
        modalContent: "Please provide all fields and a valid email adress"
      });
      setTimeout(() => {
        this.setState({
          openModal: false
        });
      }, 3000);
    }

    this.clearInput();
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
                placeholder="Name"
                onChange={this.onChangeHendler}
                name="name"
                value={this.state.name}
              />

              <input
                placeholder="Email"
                onChange={this.onChangeHendler}
                name="email"
                value={this.state.email}
              />
            </Slide>
            <Slide right>
              <textarea
                placeholder="Message"
                onChange={this.onChangeHendler}
                name="message"
                value={this.state.message}
              />
              <button type="submit">Send Message</button>
            </Slide>
          </Form>
          <Slide bottom>
            <SocialWrapper>
              <AWrapper href="https://github.com/SorinC6" target="_blank">
                <i className="fab fa-github" />
              </AWrapper>
              <AWrapper
                href="https://www.linkedin.com/in/chis-sorin-993940130/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </AWrapper>
            </SocialWrapper>
          </Slide>
          <Slide bottom>
            <p>- Chis Sorin Portofolo Site -</p>
          </Slide>
        </ContactWrapper>
        <Modal open={this.state.openModal} basic size="small">
          <Header icon="talk" content={this.state.modalTitle} />
          <Modal.Content>
            <p style={{ fontSize: 30 }}>{this.state.modalContent}</p>
          </Modal.Content>
        </Modal>
      </Element>
    );
  }
}

export default Contact;
