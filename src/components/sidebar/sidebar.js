import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sty from "../../styles/sideStyles.scss"

const SideBar = () => (
    <div
    className={'sidebar'}
      style={{
        display:'flex',
        flex:'left',
        flexDirection:'column',
        margin: 0,
        width: 200,
        height: 'calc(100vh - 100px)',
        borderRadius: '0 0 50% 0',
        padding: `0`,
        backgroundColor: '#47A7C8'
      }}
    >
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
    <div className={sty.item}>
        <h4 style={{ textAlign: 'center',verticalAlign:'middle' }}>
            <Link
            to="/CVpage"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'Curriculum'}
            </Link>
        </h4>
    </div>
    <div className={sty.item}>
        <h4 style={{ textAlign: 'center',verticalAlign:'middle' }}>
            <Link
            to="/new-index-page"
            style={{
                color: `white`,
                textDecoration: `none`,
            }}
            >
            {'new index'}
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
