import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const activeStyles = {
    background: 'purple',
    color: 'white'
}

export default function Navbar({children}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-none">
      <div class="container-fluid">
        <a class="navbar-brand">{data.site.siteMetadata.title}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link" activeStyle={activeStyles}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact/" className="nav-link" activeStyle={activeStyles}>
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about-css-modules/" className="nav-link" activeStyle={activeStyles}>
                About CSS Modules
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </nav>
  )
}