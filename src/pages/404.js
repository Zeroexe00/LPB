import React from "react"

import Layout from "../components/layout/layout"
// import SeoData from "../components/SeoData"

const NotFoundPage = () => {
//   const data = useStaticQuery(graphql`
//   {
//     site {
//         siteMetadata {
//           title
//           description
//           author
//         }
//     }
//   }
// `)

return (
  <Layout>
    {/* <SeoData title="404: Not found" /> */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)}

export default NotFoundPage
