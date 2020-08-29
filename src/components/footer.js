import { Link } from "gatsby"
import React from "react"
import { styled } from "styled-components"

const Wrapper = styled.footer`
  background: #440047;
`
const Footer = () => (
  <Wrapper>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      Home
    </Link>
  </Wrapper>
)

export default Footer
