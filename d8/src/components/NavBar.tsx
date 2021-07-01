import React from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown, Container } from "react-bootstrap";
// import { RouteComponentProp } from "react-router-dom";


class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>

              <Navbar.Brand href="#home">MY Music</Navbar.Brand>
            {/* <Link to = "/" >
              <Navbar.Brand href="#home">MY Music</Navbar.Brand>
            </Link >
            <Link to = "/favorites" >
              <Navbar.Brand href="#home">FAVORITES</Navbar.Brand>
            </Link > */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
