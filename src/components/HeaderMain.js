import React from 'react'

const HeaderMain = ({ text }) => {
  const headerStyle = {
    // margin: '0px',
    padding: '10px ',
    textAling: 'center',
    color: 'dimgray',
    fontSize: '3.5em',
  }
  return <h1 style={headerStyle}>{text}</h1>
}

export default HeaderMain
