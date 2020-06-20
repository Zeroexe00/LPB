import React from "react"
import Layout from "../components/layout/layout"
import CVPresentation from "../components/curriculum/CVPresentation"

const CVpage = () => (
  <Layout>
    <h1>Curriculum Vitae</h1>
    <div>
      <CVPresentation></CVPresentation>
    </div>
  </Layout>
)
export default CVpage