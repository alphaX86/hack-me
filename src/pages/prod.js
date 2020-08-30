import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"

const Products = () => {
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
      <Container>
        <Row>
          <Col className="col-xs-12, col-sm-6 m-auto">
            <br />
      <p>Fill this form below to get your medicines requested....</p>
      <form>
        <label>
          Name: <br />
          <input type="text" name="name" required/>
        </label> <br />
        <label>
          Age: <br />
          <input type="text" name="age" required/>
        </label> <br />
        <label>
          City: <br />
          <input type="text" name="city" required/>
        </label> <br />
        <label>
          Country: <br />
          <input type="text" name="cou" required/>
        </label> <br />
        <label>
          Medicine Name: <br />
          <input type="text" name="med_name" required/>
        </label> <br />
        <label>
          Serial No (If any): <br />
          <input type="text" name="serial" required/>
        </label> <br />
        <label>
          Manufacturer Name: <br />
          <input type="text" name="manu_name" required/>
        </label> <br />
        <label>
          Quantity: (Limited to 5 per order | 3 for class-H drugs) <br />
          <input type="number" name="quantity" required/>
        </label> <br />
        <label>
          Is it class H drug? <br />
          <input type="radio" name="classH" value="yes" required/> Yes
          <input type="radio" name="classH" value="no" required/> No
        </label> <br />
        <label>
          Delivery Date? (Estimated) <br />
          <input type="date" name="date" required/>
        </label>
        <p>Please check this agreement below and then continue!</p>
        <p>I, understand and agree that I'm using VirtuPharm for delivery purposes and requesting medicines with detailed medical prescription.</p>
        <p>WARNING: VirtuPharm isn't responsible for damage of products!</p>
        <Link to="/confirm"><Button variant="danger" size="lg">Confirm and place order</Button></Link>
      </form>
      </Col>
      </Row>
      </Container>
    </Layout>
  )
}

export default Products
