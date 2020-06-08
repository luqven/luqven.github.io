// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const HomePage = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Homepage" />
            <Bio />
            <h1> A little about me</h1>
            <Card>
              <p>Some card content to illustrate what this is for.</p>
            </Card>
        </Layout>
    )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
