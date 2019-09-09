import React from 'react'
import ContentLarge from './ContentLarge'
import HeaderMain from './HeaderMain'
import SmallContentCollection from './SmallContentCollection'

const Container = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10%',
  }
  return (
    <div style={containerStyle}>
      <HeaderMain />
      <ContentLarge />
      <SmallContentCollection />
    </div>
  )
}

export default Container
