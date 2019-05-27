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
        </ContactWrapper>
      </Element>
    );
  }
}

export default Contact;

const ContactWrapper = styled.div`
  background: lightgreen;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h4 {
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background: darkred;
  input {
    padding: 20px 30px;
    font-size: 20px;
    margin: 10px;
    border-radius: 10px;
  }

  button {
    padding: 20px 30px;
    width: 60%;
    border-radius: 20px;
  }
`;
