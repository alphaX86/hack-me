import React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SignUp = () => (
    <Layout>
        <SEO title="SignUp" />
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
           <Link to="/success"><Button variant="success" size="lg">SignUp</Button></Link>
            </form>
        </div>
    </Layout>
)

export default SignUp