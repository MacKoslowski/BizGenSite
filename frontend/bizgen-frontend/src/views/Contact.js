import React from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { signInAnonymously } from "firebase/auth";
import { addContactMessage, auth } from "../firebase_setup";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      email: "",
      message: "",
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  render() {
    return (
      <Col>
        <Card style={{ padding: "5em" }}>
          <h2 id="contact">Contact Form</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={this.setEmail}
                value={this.state.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.message}
                onChange={this.setMessage}
              />
            </Form.Group>

            <Button
              variant="primary"
              style={{ backgroundColor: "black" }}
              onClick={this.submitMessage}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    );
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  submitMessage = () => {
    console.log("in submitmessage");
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        console.log("we signed in!!!");
        addContactMessage(this.state.email, this.state.message);
        alert("Message succesfully sent!");
        this.setState({ email: "", message: "" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert(errorCode, errorMessage);
      });
  };
}

export default Contact;
