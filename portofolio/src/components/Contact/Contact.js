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
    console.log("send");
  };

  render() {
    return (
      <Element name="Contact">
        <ContactWrapper>
          <h4>Contact Info here</h4>
          <Form onSubmit={this.sendMessage}>
            <input placeholder="Name" onChange={this.onChangeHendler} />
            <input placeholder="Email" onChange={this.onChangeHendler} />
            <input placeholder="Message" onChange={this.onChangeHendler} />
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
  padding-top: 80px;
  h4 {
    margin: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 20px 30px;
    font-size: 20px;
  }
`;
