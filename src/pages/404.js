import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
  {
    site {
        siteMetadata {
          title
          description
          author
        }
    }
  }
`)

return (
  <Layout>
    <SEO title="404: Not found" site={data.site} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)}

export default NotFoundPage
