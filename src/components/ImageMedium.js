import React from 'react'

const ImageMedium = () => {
  const imageStyle = {
    boxShadow: '0px 2px 5px slategray',
    margin: '1%',
    backgroundColor: 'white',
    border: 'solid',
    borderColor: 'white',
  }
  return (
    <div style={imageStyle}>
      <img alt="palceholder" src="https://picsum.photos/200/300/" />
    </div>
  )
}

export default ImageMedium
