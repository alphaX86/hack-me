import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Login = () => (
    <Layout>
        <SEO title="Login" />
        <Container>
        <Row>
          <Col className="col-xs-12, col-sm-6 m-auto">
            <h1 style={{alignContent: `center`}}>
                Login
            </h1>
            <p>Welcome back!!</p>
            <form>
               <label>
                   Username:
                   <input type="text" name="user" required />
               </label>
               <label>
                   Password:
                   <input type="password" name="pass" required />
               </label>
               <Link to="/"><Button variant="success" size="lg">Login</Button></Link>
            </form>
            </Col>
        </Row>
    </Container>
    </Layout>
)

export default Login