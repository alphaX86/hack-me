import React from "react"
import { Link } from "gatsby"
import { Buttons } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"
import Body from "../components/body"

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
        <Body>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <h2>So exactly who we are?</h2>
            <p>We're a team who knows that medication is really important for those who need it</p>
            <p>So we've created a product which helps you to get medicines right at your doorstep!</p>
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
        <Footer>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        </Footer>
    </Layout>
)

export default HomePage