import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Grid } from '@material-ui/core';
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
    background: 'linear-gradient(to top left , gray 20%, white)',
    '&:hover': {
      background: 'linear-gradient(to top left , gray 20%, white)',
      border: '2px solid gray'
    }
  },
  blockAbout: {
    width: '100%',
    background: 'linear-gradient(to top right , gray 20%, white)'

  },
  blockCurriculum: {
    width: '100%',
    background: 'linear-gradient(to bottom left , gray 20%, white)'

  },
  blockProjects: {
    width: '100%',
    background: 'linear-gradient(to bottom right , gray 20%, white)'

  }
}));

const newIndexPage = () => {
  const classes = styles();
  return (
    <Layout>
      <SEO title="interactive home -inprogress-" />
      <div className={classes.root}>
        <Grid container component="section">
          <Grid item md={6} component="section" className={classes.blockName}>Zeroexe</Grid>
          <Grid item md={6} component="section" className={classes.blockAbout}>About</Grid>
          <Grid item md={6} component="section" className={classes.blockCurriculum}>CV</Grid>
          <Grid item md={6} component="section" className={classes.blockProjects}>Projects</Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default newIndexPage
