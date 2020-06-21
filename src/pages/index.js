import React from "react"

import { Grid,Typography  } from '@material-ui/core';
import Perfil from '../components/Perfil'
import SeoData from '../components/SeoData'
import useMobileDetect from '../hooks/useMobileDetect'
import { makeStyles } from '@material-ui/core/styles';
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

function IndexPage() {

  const classes = styles();
  const isMobile = useMobileDetect();
  return (
    <div>
      <SeoData title="Exequiel Alvarez" description="CV Page"></SeoData>
        <div className={classes.root}>
          {Array(100).fill({}).map((_,i)=>(
            <div key={i} className={'circle-container'}>
              <div className={'circle'}></div>
            </div>
          ))}
          <Grid container justify="center" alignItems="center" direction={isMobile ? 'row' : 'column'} >
            <Grid item md={6} xs={12}><Perfil /></Grid>
            <Grid item md={6} xs={12}>
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

export default IndexPage
