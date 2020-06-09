// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/experience"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: array
  }
}

const HomePage = ({ data, location }: PageProps<Data>) => {
    const siteTitle = data.site.siteMetadata.title
    const nodesArray = {...data.allMarkdownRemark.edges}
    const aboutHtml = nodesArray[0].node.html;

    console.log(aboutHtml)
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Homepage" />
            <Bio />
            <h1> A little about me</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: aboutHtml,
              }}
            />
            <h1> Recent work</h1>
            <WorkExperience />
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
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "About me" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
