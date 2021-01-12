import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="search-outer">
      <form
        role="search"
        method="get"
        id="searchform"
        className="searchform"
        action=""
      >
        {/* input field activates onKeyUp function on state change */}
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search by firstname, lastname, and more...."
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />

        <button type="submit" id="searchsubmit">
          <FontAwesomeIcon icon={faSearch} />
          {/* <i className="fa fa-search" aria-hidden="true" /> */}
        </button>
      </form>
    </div>
  );
}

export default Search;
