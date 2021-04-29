import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import React, { Component } from "react";
// import styled from "styled-components";

const linkStyle = {
  paddingRight: "100px",
  fontSize: "24px",
  color: "#a8a8a8",
  fontWeight: "100",
};
const navPadding = {
  paddingTop: "50px",
};

class Navigation extends Component {
  render() {
    return (
      <Container fluid>
        <Router>
          <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="nav-link "
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav style={navPadding}>
                <Link to="/" className="nav-link" style={linkStyle}>
                  Home
                </Link>
                <Link to="/about" className="nav-link" style={linkStyle}>
                  About me
                </Link>
                <Link to="/contact" className="nav-link" style={linkStyle}>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <AboutMe />
              <Button variant="success">Contact</Button>
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}
export default Navigation;
