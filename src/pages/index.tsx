// Gatsby supports TypeScript natively!
import { graphql, PageProps } from "gatsby"
import React from "react"

import Social from "../components/icons/social"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
