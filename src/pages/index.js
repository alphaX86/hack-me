import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>
    <h1>Title</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Your wanted medicines and life-saving medicines at your doorstep!</p>
    <p>All branded company products available with nominal price</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
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
