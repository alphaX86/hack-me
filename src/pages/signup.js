import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"

const SignUp = () => (
    <Layout>
        <SEO title="SignUp" />
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
        <div className="Form"
        style={{maxWidth: `200px`, marginBottom: `1.45rem`}}>
            <h1 style={{alignContent: `center`}}>
                SignUp
            </h1>
            <p>Hello there! Seems you're new to this! Let me help you!</p>
            <form>
            <label>
                Name:
            <input type="text" name="name" required />
            </label>
            <label>
                Age:
            <input type="number" name="age" required />
            </label>
            <label>
                Area:
            <input type="text" name="area" required />
            </label>
            <label>
                Address:
            <input type="textarea" name="address" />
            </label>
            <label>
                Username:
            <input type="text" name="user" required />
            </label>
            <label>
                Password:
            <input type="password" name="pass" required />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        <Footer>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>
        </Footer>
    </Layout>
)

export default SignUp