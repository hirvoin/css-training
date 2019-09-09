import React from 'react'
import ContentLarge from './ContentLarge'
import HeaderMain from './HeaderMain'
import SmallContentCollection from './SmallContentCollection'

const HomePage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '12%',
    padding: '0% 1% 1% 1%',
  }
  return (
    <div style={containerStyle}>
      <HeaderMain text="Home" />
      <ContentLarge />
      <SmallContentCollection />
    </div>
  )
}

export default HomePage
