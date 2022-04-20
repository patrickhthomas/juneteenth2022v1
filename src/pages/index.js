import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import LandingPage from "../components/landingPage"
import { graphql } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <LandingPage />

    </Layout>
  )
}

export default IndexPage


