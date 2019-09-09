import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
  const seachboxStyle = {
    backgroundColor: 'lightgray',
    border: 'solid',
    borderColor: 'lightgray',
    borderRadius: '9px',
    height: '30px',
    fontSize: '1em',
  }

  const iconStyle = {
    color: 'lightgray',
    marginRight: '10px',
  }

  return (
    <form>
      <FontAwesomeIcon icon={faSearch} style={iconStyle} />
      <input type="search" style={seachboxStyle} placeholder="Type here..." />
    </form>
  )
}

export default SearchBox
