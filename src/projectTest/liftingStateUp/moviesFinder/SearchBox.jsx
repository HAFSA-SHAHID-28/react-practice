import React from 'react'

const SearchBox = ({search, setSearch}) => {
  return (
    <>

    <input 
        type="text" 
        placeholder='Search Your Fav Movie...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />

    </>
  )
}

export default SearchBox