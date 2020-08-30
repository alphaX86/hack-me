import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const Login = () => (
    <Layout>
        <SEO title="Login" />
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
    </Layout>
)

export default Login