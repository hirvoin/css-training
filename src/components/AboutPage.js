import React from 'react'
import ImageMedium from './ImageMedium'
import ContentSmall from './ContentSmall'
import HeaderMain from './HeaderMain'

const AboutPage = () => {
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
      <HeaderMain text="About" />
      <div style={{ display: 'flex ' }}>
        <ImageMedium />
        <ContentSmall />
        <ImageMedium />
      </div>
    </div>
  )
}

export default AboutPage
