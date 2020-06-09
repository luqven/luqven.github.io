import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            marginRight: '50px',
          }}
          to={`/`}
        >
          {title}
        </Link>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            fontSize: 'large',
          }}
          to={`/blog-index`}
        >
          {'blog'}
        </Link>
      </h1>
    )
  } else {
  header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
          marginRight: '50px',
        }}
        to={`/blog-index`}
      >
        {"Luis Ball"}
      </Link>
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
          fontSize: 'large',
        }}
        to={`/`}
      >
        {'Home'}
      </Link>
    </h1>
  )}

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
