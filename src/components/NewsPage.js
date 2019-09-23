import React from 'react'
import HeaderMain from './HeaderMain'
import ContentLarge from './ContentLarge'
import ImageLarge from './ImageLarge'
import ImageMedium from './ImageMedium'

const NewsPage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue, 1px 1px 1px black',
    maxWidth: '1200px',
    margin: '10px auto 50px auto',
    padding: '1% 1% 1% 1%',
  }

  return (
    <div>
      <HeaderMain text="News" />
      <div style={containerStyle}>
        <div style={{ display: 'flex' }}>
          <ContentLarge />
          <ImageLarge />
        </div>
        <div style={{ display: 'flex' }}>
          <ImageMedium />
          <ContentLarge />
        </div>
      </div>
    </div>
  )
}

export default NewsPage
