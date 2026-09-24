/////////////////////////////   for parent 
// import Parent from './Parent'
// const Main = () => {
//   return (
//     <>
//         <Parent/>
//     </>
//   )
// }
// export default Main




////////////////////////////  for search box

import { useState } from "react"
import SearchBox from "./searchBox/SearchBox";
import Product from "./searchBox/Product";

const Main = () => {

  const [search, setSearch] = useState("");

  
  return (
    <>
       <SearchBox search={search} setSearch={setSearch}/>
       <Product searchText={search}/>
    </>
  )
}
export default Main