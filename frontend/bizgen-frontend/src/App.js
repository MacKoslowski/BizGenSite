import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import About from "./views/About";
import Business from "./views/Business";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  app,
  db,
  getBlogPosts,
  addContactMessage,
  auth,
} from "./firebase_setup";

class App extends React.Component {
  render() {
    console.log("render?");
    return (
      <div>
        <Router>
          <Navbar expand="lg" className="navBarStyle">
            <Container fluid>
              <Navbar.Brand href="#">
                <h4>BizGen Solutions</h4>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#business_loans">Business Loans</Nav.Link>
                  <Nav.Link href="#blog">Blog</Nav.Link>
                  <Nav.Link href="#about_us">About</Nav.Link>

                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <span style={{ color: "white" }}>
                <BsFillPersonFill size={20} /> &nbsp;:
                info@bizgensolutions.com&nbsp;&nbsp; &nbsp;
                <BsTelephoneFill />
                &nbsp;: (444)-555-6666
              </span>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
