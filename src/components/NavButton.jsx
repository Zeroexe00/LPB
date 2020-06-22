import React from 'react'
import { Link } from "gatsby"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(()=>({
  navButtonContainer: {
    margin: 15,
    
  }
}))
export default function NavButton({direction, text}) {
  const classes = styles();

  return (
    <div className={classes.navButtonContainer}>
      <Button variant="contained" color="primary">
        <Link
            to={direction}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {text}
          </Link>
      </Button>

    </div>
  )
}