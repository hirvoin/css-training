import React from 'react'
import ImageMedium from './ImageMedium'
import ContentSmall from './ContentSmall'
import HeaderMain from './HeaderMain'

const AboutPage = () => {
  const containerStyle = {
    backgroundColor: 'ghostwhite',
    boxShadow: '0px 2px 9px slateblue, 1px 1px 1px black',
    maxWidth: '1200px',
    margin: '10px auto 200px auto',
    padding: '1% 1% 1% 1%',
  }
  return (
    <div>
      <HeaderMain text="About" />
      <div style={containerStyle}>
        <div style={{ display: 'flex ' }}>
          <ImageMedium />
          <ContentSmall />
          <ImageMedium />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
