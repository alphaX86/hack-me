import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const Portal = () => (
    <Layout>
        <SEO title="Portal" />
        <div className="Portal"
        style={{maxWidth: `200px`, marginBottom: `1.45rem`}}>
            <h1 style={{alignContent: `center`}}>
                Portal
            </h1>
            <p>Hello there! Seems you're new to this! Let me help you!</p>
            <p>Or if you're already a user, login!</p>
            <Link to="/login">
            <Button variant="primary" size="lg" active>
            Login
            </Button>{' '}
            </Link>
            <Link to="/signup">
            <Button variant="secondary" size="lg" active>
            Signup
            </Button>{' '}
            </Link>
        </div>
    </Layout>
)

export default Portal