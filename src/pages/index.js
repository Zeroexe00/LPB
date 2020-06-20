import React from "react"

import SEO from "../components/seo"
import { Grid,Typography  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import { useStaticQuery as staticQ, graphql } from 'gatsby'

import "../styles/newIndex.scss"

const styles = makeStyles(() => ({
  root: {
    color: '#bbb',
    width: '100%',
    height: '100vh',
    margin: 15,
    display: 'flex',

  },
  blockName: {
    width: '100%',
    background: 'linear-gradient(to top left , #DFDFDF 20%, transparent)',
    '&:hover': {
      background: 'linear-gradient(to top left , #DFDFDF 20%, transparent)',
      border: '2px solid gray'
    }
  },
  blockAbout: {
    width: '100%',
    background: 'linear-gradient(to top right , #DFDFDF 20%, transparent)'

  },
  blockCurriculum: {
    width: '100%',
    background: 'linear-gradient(to bottom left , #DFDFDF 20%, transparent)'

  },
  blockProjects: {
    width: '100%',
    background: 'linear-gradient(to bottom right , #DFDFDF 20%, transparent)'

  }
}));

const newIndexPage = () => {
  const data = staticQ(graphql`
    {
      file(relativePath: {eq: "img-perfil-exe.jpeg"}) {
        childImageSharp {
          fixed(height: 300, width: 200) {
            base64
            height
            src
            width
            aspectRatio
            originalName
            srcSet
          }
        }
      }
    }
  `)

  const classes = styles();
  return (
    <div>
        <SEO title="interactive home -inprogress-" />
        <div className={classes.root}>
          {Array(100).fill({}).map(()=>(
            <div className={'circle-container'}>
              <div className={'circle'}></div>
            </div>
          ))}
          <Grid container justify="center" alignItems="center" direction="column">
            <Grid item md={6}><Img fixed={data.file.childImageSharp.fixed} alt="Exequiel" /></Grid>
            <Grid item md={6}>
              <Typography component="h2" color="primary" className={'message'} align="center">
                Hola mi nombre es Exequiel Alvarez, soy desarrollador Frontend
              </Typography>
              <Typography component="p" color="primary" className={'message'}>
                Como otros tantos soy un apasionado de la tecnología especialmente
                en el area de las aplicaciones web y videojuegos, aunque tambien 
                aspiro a poder aprender a implementar IA's y tambien IoT, 
                Inteligencia Artificial e Internet De las Cosas respectivamente,
                Actualmente trabajo remoto como desarrollador Frontend, en lenguaje 
                Javascript con el framework vue + nuxt, tambien tengo experiencia en
                ReactJS + NextJS y GraphQL ademas en base de datos en MySQL, anteriormente trabaje como FullStack
                Programando en C# con el framework .NET y en base de datos SQLServer
              </Typography>
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default newIndexPage
