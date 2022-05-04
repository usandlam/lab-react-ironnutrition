import React, { useState } from "react";

function SearchBox(props) {
  const [ query, setQuery ] = useState("");

  const handleQuery = e => {
    e.preventDefault();
    setQuery(e.target.value);
    // if(e.target.value !== ''){
    //   console.log('Call sort here');
    // }else{

    // }
    console.log("Searching: ", e.target.value);
    props.foodSearch(e.target.value);
  }

    return (
        <input type="text" className="input search-bar" name="search" placeholder="Search" value={query} onChange={handleQuery}/>
      );    
}
 
export default SearchBox;