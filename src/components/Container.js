import React from 'react'
import ContentLarge from './ContentLarge'
import HeaderMain from './HeaderMain'
import SmallContentCollection from './SmallContentCollection'

const Container = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: 'white',
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
