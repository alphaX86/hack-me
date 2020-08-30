import React from "react"
import { Link } from "gatsby"
import { Buttons } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"
import Body from "../components/body"

const Products = () => (
    <Layout>
        <SEO title="Category" />
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
        <Body>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <h2>Products</h2>
           </div>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`, background: `lightwhite`}}>
            Medicines at discount price!
            <div style={{maxWidth: `200px`, marginBottom: `1.22rem`, background: `red`, color: `white`, fontSize: `16px`}}>

            </div>
            <div style={{maxWidth: `200px`, marginBottom: `1.22rem`, background: `red`, color: `white`, fontSize: `16px`}}>
                
            </div>
            <div style={{maxWidth: `200px`, marginBottom: `1.22rem`, background: `red`, color: `white`, fontSize: `16px`}}>
                
            </div>
        </div>
        </Body>
        <Footer />
)

export default Products