import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CVPresentation from "../components/curriculum/CVPresentation"

const CVpage = () => (
  <Layout>
    <SEO title="Curriculum Vitae"/>
    <h1>Curriculum Vitae</h1>
    <div>
      <CVPresentation></CVPresentation>
    </div>
  </Layout>
)
export default CVpage