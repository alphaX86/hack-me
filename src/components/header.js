import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap"
import styled from "styled-components"

const StyledNavbar = styled.div`
  position: relative;
  z-index: 1;
  .navbar {
    background-color: #440047 !important;
    height: 4rem;
  }
  .navbar-collapse {
    background-color: #440047 !important;
    padding-left: 10px;
    padding-right: 1px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #df1;
    text-decoration: none;
  }
`
const Header = () => (
  <StyledNavbar>
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">VirtuPharm</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/prod">Products</Link>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto mr-3">
          <Link to="/portal">Register/Login</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </StyledNavbar>
)

export default Header
