import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"

const HomePage = () => (
    <Layout>
        <SEO title="HomePage" />
        <Header>
            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            Title 
            </div>
            <div style={{maxWidth: `200px`, marginBottom: `1.45rem`}}>
            <Link to="/prod/">Products</Link>
            <Link to="/cat/">Categories</Link>
            <Link to="/login/">Login</Link>
            <Link to="/signup/">SignUp</Link>
            </div>
        </Header>
        <Footer>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        </Footer>
    </Layout>
)

export default HomePage