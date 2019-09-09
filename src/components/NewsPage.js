import React from 'react'
import HeaderMain from './HeaderMain'
import SmallContentCollection from './SmallContentCollection'
import ContentLarge from './ContentLarge'
import ImageLarge from './ImageLarge'
import ImageMedium from './ImageMedium'

const NewsPage = () => {
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
      <HeaderMain text="News" />
      <div style={{ display: 'flex' }}>
        <ContentLarge />
        <ImageLarge />
      </div>
      <div style={{ display: 'flex' }}>
        <ImageMedium />
        <ContentLarge />
      </div>
    </div>
  )
}

export default NewsPage
