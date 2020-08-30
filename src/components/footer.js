import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.footer`
  background: #440047;
  min-height: 200px;
  max-width: 100vw;
  color: #fff;
  padding-top: 10px;
  li {
    list-style: none;
  }

  #facebook:hover {
    color: #3b5998;
  }
  #instagram:hover {
    color: #3f729b;
  }
  #twitter:hover {
    color: #00acee;
  }
  a {
    color: #fff;
  }
`
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #df1;
    text-decoration: none;
  }
`
const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <h3>Links</h3>
          <ul>
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
            <li>
              <FooterLink to="/prod">Products</FooterLink>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h3>About Us</h3>
          <p>
          We are a group of people who thinks that medication is important for people and even loved ones.
          We make products which connects customers and dealers to get their medicines on time. 
          Still confused? Try our site and order your medicines to get right on your doorstep!
          </p>
          <p className="text-center">&copy; {new Date().getFullYear()}</p>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h3>Social Media</h3>
          <a
            href="https//:facebook.com/virtupharm"
            className="mr-5"
            id="facebook"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a
            href="https//:instagram.com/virtupharm"
            className="mr-5"
            id="instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a
            href="https//:twitter.com/virtupharm"
            className="mr-5"
            id="twitter"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
