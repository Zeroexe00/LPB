/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SideBar from "./sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      style={{
        display:'flex',
        flexDirection:'row'
      }} 
      >
      <SideBar siteTitle={data.site.siteMetadata.title}>
      </SideBar>
      <div
        style={{
          display:'flex',
          margin: 0,
          maxWidth: 960,
          padding: `0px 1em 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
