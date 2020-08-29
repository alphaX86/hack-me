import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Container, Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col xs={12}>
          <Image />

          <Button>Sign Up</Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
