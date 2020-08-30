import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { Container, Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

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
    <Header>
    <h1>Title</h1>
    <p>Welcome to title</p>
    <p>Your wanted medicines and life-saving medicines at your doorstep!</p>
    <p>All branded company products available with nominal price</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <Link to="/home/"><div className="mb-2">
      <Button variant="primary" size="lg">
        Go to site!
      </Button>{' '}
  </div>
  </Link> <br />
    <Link to="/login/">
      <div className="mb-2">
    <Button variant="secondary" size="lg">
      Login!
    </Button>{' '}
  </div>
  </Link>
    </Header>
  </Layout>
)

export default IndexPage
