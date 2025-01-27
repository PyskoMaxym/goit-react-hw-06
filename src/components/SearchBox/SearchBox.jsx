import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({value, onFilter}) => {

    return(
        <div className={s.search}>
            <p>Find contacts by name</p>
        <input type="text"
        value={value}
        onChange={(event)=> onFilter(event.target.value)}
        />
        </div>

    )
}

export default SearchBox;