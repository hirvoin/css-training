import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const HeaderMain = ({ text }) => {
  const headerStyle = {
    margin: '40px auto 30px auto',
    // padding: '2%',
    textAling: 'center',
    color: 'dimgray',
    fontSize: '3.5em',
    textShadow: '0px 1px 2px midnightblue',
    // display: 'block',
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={headerStyle}>
        <FontAwesomeIcon
          icon={faHome}
          style={{
            marginRight: '10px',
            textShadow: '10px 10px 3px midnightblue',
          }}
        />
        {text}
      </div>
    </div>
  )
}

export default HeaderMain
