import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faNewspaper,
  faQuestionCircle,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox'

const NavBar = () => {
  const navbarStyle = {
    listStyleType: 'none',
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    padding: '0',
  }
  const navbaritemStyle = {
    color: 'lightgray',
    textAling: 'center',
    display: 'block',
    margin: '20px',
    fontSize: '1.5em',
  }

  return (
    <nav
      style={{
        margin: 0,
        // backgroundColor: 'midnightblue',
        background: 'rgb(73,67,157)',
        background:
          'linear-gradient(90deg, rgba(73,67,157,1) 0%, rgba(25,25,112,1) 10%, rgba(14,14,73,1) 90%)',
        boxShadow: '0px 5px 9px slategray, 0px 2px 2px black',
      }}
    >
      <ul role="navigation" style={navbarStyle}>
        <Link to="/">
          <li style={navbaritemStyle}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
            Home
          </li>
        </Link>
        <Link to="/news">
          <li style={navbaritemStyle}>
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ marginRight: '10px' }}
            />
            News
          </li>
        </Link>
        <Link to="/about">
          <li style={navbaritemStyle}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ marginRight: '10px' }}
            />
            About
          </li>
        </Link>
        <li style={{ ...navbaritemStyle, fontSize: '1em', margin: 'auto' }}>
          <SearchBox />
        </li>
        <Link to="/sign-in">
          <li style={{ ...navbaritemStyle, marginLeft: 'auto' }}>
            <FontAwesomeIcon
              icon={faSignInAlt}
              style={{ marginRight: '10px' }}
            />
            Sign in
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
