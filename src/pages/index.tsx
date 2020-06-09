// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkExperience from "../components/experience"
import FaIcon from "../components/icons/faIcon"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

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
            <div
              dangerouslySetInnerHTML={{
                __html: aboutHtml,
              }}
            />
          <br />
          <div className="social-icons" style={{display: 'flex', flexDirection: 'row'}}>
            <a href="https://github.com/luqven">
              <FaIcon icon={faGithub} size="2x" />
              <p style={{paddingRight: 15}}>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/luisballjr/">
              <FaIcon icon={faLinkedinIn} size="2x" />
              <p style={{paddingRight: 15}}>LinkedIn</p>
            </a>
            <a href="https://drive.google.com/file/d/1ENwQMcwDOktyqNsOCMdTMVHKt69JLOs0/view?usp=sharing">
              <FaIcon icon={faFileAlt} size="2x" />
              <p style={{paddingRight: 15}}>Resume</p>
            </a>
            <a href="mailto:luishballjr@gmail.com">
              <FaIcon icon={faMailBulk} size="2x" />
              <p style={{paddingRight: 15}}>Contact Me</p>
            </a>
          </div>
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
