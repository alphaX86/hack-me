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
      <SEO title="About us" />
      <Container>
        <Row>
          <Col xs={12} sm={6} className="pt-5">
            <h1>About</h1>
            <p>
              We are a group of people who thinks that medication is important for people and even loved ones.
              We make products which connects customers and dealers to get their medicines on time. 
              Still confused? Try our site and order your medicines to get right on your doorstep!
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
