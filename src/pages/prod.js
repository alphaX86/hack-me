import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
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
            <h1>Products</h1>
            <p>
              VirtuPharm is a site which you can order medicines to arrive in your doorstep!
            </p>
            <p>
                To get started, first sign in or login to continue seeing products!
            </p>
            <p>
                P.S: We need a doctor's prescription in order to receive your medicines!
            </p>
          </Col>
          <Col xs={12} sm={6} className="pt-5">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
