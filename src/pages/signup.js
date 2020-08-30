import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SignUp = () => (
    <Layout>
        <SEO title="SignUp" />
            <h1 style={{alignContent: `center`}}>
                SignUp
            </h1>
            <p>Hello there! Seems you're new to this! Let me help you!</p>
            <Container>
                <Row>
                    <Col className="col-xs-12, col-sm-6 m-auto">
            <form>
            <label>
                Name: <br />
            <input type="text" name="name" required />
            </label> <br />
            <label>
                Age: <br />
            <input type="number" name="age" required />
            </label> <br />
            <label>
                Area: <br />
            <input type="text" name="area" required />
            </label> <br />
            <label>
                Address: <br />
            <input type="textarea" name="address" />
            </label> <br />
            <label>
                Username: <br />
            <input type="text" name="user" required />
            </label> <br />
            <label>
                Password: <br />
            <input type="password" name="pass" required />
            </label>
           <Link to="/success"><Button variant="success" size="lg">SignUp</Button></Link>
            </form>
            </Col>
            </Row>
            </Container>
    </Layout>
)

export default SignUp