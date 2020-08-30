import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Footer = ({siteTitle}) => (
    <footer
        style={{
            background: `#440047`,
            marginBottom: `1.5rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0700rem`,    
            }}   
        >
            <h1 style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
        >
            {siteTitle}
                    </Link>
                </h1>
            </div> 
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
  }
  
export default Footer
  