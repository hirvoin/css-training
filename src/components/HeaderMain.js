import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const HeaderMain = ({ text }) => {
  const headerStyle = {
    margin: '0 0 30px 100px',
    padding: '3%',
    // textAling: 'center',
    color: 'dimgray',
    fontSize: '3.5em',
    // display: 'block',
  }
  return (
    <div style={headerStyle}>
      <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
      {text}
    </div>
  )
}

export default HeaderMain
