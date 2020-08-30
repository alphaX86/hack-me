import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"

const Confirm = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "freestocks-nss2eRzQwgw-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Products" />
      <Container>
        <Row>
          <Col xs={12} sm={6} className="pt-5">
            <h1>Order Placed!</h1>
            <p>
              VirtuPharm is has placed your requested order successfully!
            </p>
            <p>
                To order more medicines, go to the form and fill again! Thank you for your order!
            </p>
            <p>
                P.S: We need a doctor's prescription in order to receive your medicines at the time of your delivery for confirmation!
            </p>
            <Link to="/"><Button variant="success" size="lg">Redirect to Home</Button></Link>
          </Col>
          <Col xs={12} sm={6} className="pt-5">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Confirm
