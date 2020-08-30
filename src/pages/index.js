import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col xs={12}>
        <Image />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
