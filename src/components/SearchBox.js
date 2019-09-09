import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  const seachboxStyle = {
    backgroundColor: 'lightgray',
    border: 'solid',
    borderColor: 'lightgray',
    borderRadius: '9px',
    height: '15px',
    borderWidth: 'thick',
  }

  const iconStyle = {
    color: 'lightgray',

    // textAling: 'center',
    marginRight: '10px',
  }

  return (
    <form>
      <FontAwesomeIcon icon={faSearch} style={iconStyle} />
      <input style={seachboxStyle} placeholder="Type here..." />
    </form>
  )
}

export default SearchBox
