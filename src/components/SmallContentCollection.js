import React from 'react'
import ContentSmall from './ContentSmall'

const SmallContentCollection = () => {
  const collectionStyle = {
    display: 'flex',
  }

  return (
    <div style={collectionStyle}>
      <ContentSmall style={{ float: 'left' }} />
      <ContentSmall />
      <ContentSmall />
    </div>
  )
}

export default SmallContentCollection
