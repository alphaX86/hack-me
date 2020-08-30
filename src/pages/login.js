import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Header from "../components/header"
import Footer from "../components/footer"

const Login = () => (
    <Layout>
        <SEO title="Login" />
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
               <input type="submit" value="Login" />
            </form>
        </div>
        <Footer />
    </Layout>
)

export default Login