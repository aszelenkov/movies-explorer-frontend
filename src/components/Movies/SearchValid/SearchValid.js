import React from "react"
import "./SearchValid.css"
function SearchValid({ titleError }) {
  return <p className="search__valid">{titleError}</p>
}

export default SearchValid;