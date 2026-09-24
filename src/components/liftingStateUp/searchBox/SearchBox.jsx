import React from "react";

const SearchBox = ({ search, setSearch }) => {
    
    return (
        <>
            <input 
                type="text"
                placeholder="Search Product...." 
                value={search}
                // onChange={(e)=> {setSearch(e.target.value); console.log(e); ////  e console men show hoga suke andar target ke anda input ki value mili gi 
                 onChange={(e)=> {setSearch(e.target.value); console.log(e);
                }}
            />
        </>
    );
};

export default SearchBox;
