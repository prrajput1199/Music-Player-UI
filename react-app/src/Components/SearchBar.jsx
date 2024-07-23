import React from "react";
import {MagnifyingGlass} from "phosphor-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="Search-div">
      <input
        type="text"
        placeholder="Search Song , Artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchbar"
      />
      <MagnifyingGlass size={24} style={{
        color:"white",
        paddingRight:"15px"
      }}/>
    </div>
  );
};

export default SearchBar;
