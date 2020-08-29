/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { Row, Col } from "react-bootstrap"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    font-family: "Balsamiq Sans";
    font-size: 400;
  }
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
