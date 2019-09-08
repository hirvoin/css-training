import React from 'react'

const SearchBox = () => {
  const seachboxStyle = {
    border: 'solid',
    borderColor: 'white',
    borderRadius: '9px',
    height: '20px',
    borderWidth: 'thick',
  }

  return (
    <div>
      <input style={seachboxStyle} placeholder="Type here..." />
    </div>
  )
}

export default SearchBox
