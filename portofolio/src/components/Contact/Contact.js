import React, { Component } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  sendMessage = e => {
    e.preventDefault();
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
          <h3>Contact Me</h3>
          <h4>Interest in working thogether?</h4>
          <Form onSubmit={this.sendMessage}>
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
            <input
              placeholder="Message"
              onChange={this.onChangeHendler}
              name="message"
              value={this.state.message}
            />
            <button type="submit">Send Message</button>
          </Form>
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
          <p>Chis Sorin Portofolo Site</p>
        </ContactWrapper>
      </Element>
    );
  }
}

export default Contact;

const ContactWrapper = styled.div`
  background: lightgreen;
  height: 800px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    margin-top: 80px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 10px #777;

  input {
    padding: 13px 20px;
    font-size: 16px;
    margin: 10px;
    border-radius: 10px;
    outline: none;
  }
  input:nth-of-type(3) {
    height: 150px;
    width: 60%;
  }

  button {
    padding: 20px 30px;
    width: 60%;
    border-radius: 20px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const AWrapper = styled.a`
  font-size: 60px;
  padding: 10px 20px;
  margin: 0 20px;
  box-shadow: 0 15px 10px #777;
`;
