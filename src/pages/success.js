import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Success = () => (
    <Layout>
        <SEO title="SignUp" />
            <h2>SignUp Successful!</h2>
            <p>Now you're a customer of VirtuPharm! Welcome aboard!</p>
            <p>Click to redirect!</p>
           <Link to="/"><Button variant="success" size="lg">Redirect!</Button></Link>
    </Layout>
)

export default Success