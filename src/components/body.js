import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Body = ({siteTitle}) => (
    <body 
        style={{
            background: `lightgrey`,
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
    </body>
)

Body.propTypes = {
    siteTitle: PropTypes.string,
}

Body.defaultProps = {
    siteTitle: ``,
  }
  
export default Body
  