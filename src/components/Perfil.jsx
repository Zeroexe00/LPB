import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Perfil() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "perfil.jpeg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(height: 300, width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="perfil img"
      />
    </div>
  )
}