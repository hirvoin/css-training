import React from 'react'
import SearchBox from './SearchBox'

const NavBar = () => {
  const navbarStyle = {
    backgroundColor: 'black',
    listStyleType: 'none',
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    padding: '0',
    '& li:hover': {
      color: 'black',
    },
  }
  const navbaritemStyle = {
    color: 'white',
    textAling: 'center',
    display: 'block',
    margin: '10px',
    fontSize: '1.5em',
  }

  return (
    <nav
      style={{
        margin: 0,
        backgroundColor: 'black',
        boxShadow: '0px 5px 9px rgb(238, 245, 142)',
      }}
    >
      <ul role="navigation" style={navbarStyle}>
        <li style={navbaritemStyle}>Home</li>
        <li style={navbaritemStyle}>News</li>
        <li style={navbaritemStyle}>About</li>
        <li style={{ ...navbaritemStyle, margin: 'auto' }}>
          <SearchBox />
        </li>
        <li style={{ ...navbaritemStyle, marginLeft: 'auto' }}>Sign in</li>
      </ul>
    </nav>
  )
}

export default NavBar
