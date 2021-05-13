// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/experience"
import Social from "../components/icons/social"

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
  const nodesArray = { ...data.allMarkdownRemark.edges }
  const aboutHtml = nodesArray[0].node.html

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <div
        dangerouslySetInnerHTML={{
          __html: aboutHtml,
        }}
      />
      <br />
      <Social />
      <h1> Past work</h1>
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
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "About me" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
