import React, { useState } from 'react'
import SearchBox from './SearchBox';
import Movies from './Movies';

const Main = () => {

    const [search, setSearch] = useState("");


  return (
    <>
    
    <SearchBox search={search} setSearch={setSearch} />
    <Movies searchText={search} />
    
    </>
  )
}

export default Main