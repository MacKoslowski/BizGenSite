import React, { useState } from "react";
import { getBlogPosts, auth, db } from "../firebase_setup";
import { signInAnonymously } from "firebase/auth";
import { Card, Row, Col, Modal, Button } from "react-bootstrap";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      blog_posts: [],
    };
  }

  componentDidMount() {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        let result = getBlogPosts(db);
        result.then((posts) => {
          console.log(posts);
          this.setState({ blog_posts: posts });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert(errorCode, errorMessage);
      });
  }

  render() {
    let blog_post_cards = this.state.blog_posts.map((post) => {
      const date = post.date.toDate().toDateString();
      return <BlogPost post={post} date={date} key={Math.random()} />;
    });
    return (
      <div className="longText">
        <Card>
          <h2 className="headerCenter" id="blog">
            Blog Posts
          </h2>
          <Row>{blog_post_cards}</Row>
        </Card>
      </div>
    );
  }
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    console.log("show is true");
    console.log(this.props.post);
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Col>
        <Card className="cardStyle" key={Math.random()}>
          <Card.Body>
            <Card.Title onClick={this.showModal}>
              <h3 style={{ color: "lightblue" }}>{this.props.post.title}</h3>
            </Card.Title>
            <Card.Subtitle className="mb-2 ">{this.props.date}</Card.Subtitle>
            <Card.Text>{this.props.post.body}</Card.Text>
            <p style={{ fontSize: "12px" }}>Click title to read more...</p>
          </Card.Body>
        </Card>
        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.post.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.post.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    );
  }
}

export default Blog;
