import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './bizgen_logo.png'
import Home from './views/Home';
import Blog from './views/Blog';
import Contact from './views/Contact';
import About from './views/About';
import Business from './views/Business';
import {LinkContainer} from 'react-router-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import React from 'react';
import { getAuth, signInAnonymously } from "firebase/auth";
import {app, db, getBlogPosts, addContactMessage, auth} from './firebase_setup';

class App extends React.Component {

  componentDidMount() {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        console.log('we signed in!!!')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage)
      });
  }  


  render() {
    console.log('render?') 
    return (
    <div >
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to='/'>
                  <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <Nav.Link >About</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/business'>
                  <Nav.Link >Business Loans</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/blog'>
                  <Nav.Link >Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/contact'>
                  <Nav.Link >Contact</Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );}
}

export default App;
