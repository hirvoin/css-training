import React from 'react'
import ContentLarge from './ContentLarge'
import HeaderMain from './HeaderMain'
import SmallContentCollection from './SmallContentCollection'

const HomePage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue, 1px 1px 1px black',
    maxWidth: '1200px',
    margin: '40px auto 200px auto',
    padding: '1% 1% 1% 1%',
  }
  return (
    <div>
      <HeaderMain text="Home" />
      <div style={containerStyle}>
        <ContentLarge />
        <SmallContentCollection />
      </div>
    </div>
  )
}

export default HomePage
