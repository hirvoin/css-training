import React from 'react'

const ImageLarge = () => {
  const imageStyle = {
    boxShadow: '0px 2px 9px slategray',
    margin: '1%',
    backgroundColor: 'white',
    border: 'solid',
    borderColor: 'white',
  }
  return (
    <img style={imageStyle} alt="placeholder" src="https://picsum.photos/400" />
  )
}

export default ImageLarge
