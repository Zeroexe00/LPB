import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage2 = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Zeroexe's blog</h1>
    <p>En este blog se espera plasmar distintos fases del conocimiento adquirido a lo largo de mi camino en la programación.</p>
    <p>Aunque mi pasion se encuentra en los videojuegos actualmente soy desarrollador web en una empresa, tomo esto como un paso para mucho mas adelante poder tener una empresa sustentable de videojuegos</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage2
