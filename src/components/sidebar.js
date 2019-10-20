import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sty from "./sideStyles.scss"

const SideBar = () => (
    <div
      style={{
        display:'flex',
        flex:'left',
        flexDirection:'column',
        margin: 0,
        width: 200,
        height: '100vh',
        padding: `0`,
        backgroundColor: '#2a82c9'
      }}
    >
    <div className={sty.item}>
        <h4 style={{ textAlign: 'center',verticalAlign:'middle'}}>
            <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'Bio'}
            </Link>
        </h4>
    </div>
    <div className={sty.item}>
        <h4 style={{ textAlign: 'center',verticalAlign:'middle'}}>
            <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'Juegos'}
            </Link>
        </h4>
    </div>
    <div className={sty.item}>
        <h4 style={{textAlign: 'center',verticalAlign:'middle'}}>
            <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'Contenido'}
            </Link>
        </h4>
    </div>
    <div className={sty.item}>
        <h4 style={{ textAlign: 'center',verticalAlign:'middle' }}>
            <Link
            to="/"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'Contacto'}
            </Link>
        </h4>
    </div>
    </div>
)

SideBar.propTypes = {
  siteTitle: PropTypes.string,
}

SideBar.defaultProps = {
  siteTitle: ``,
}

export default SideBar
