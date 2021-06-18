import classes from "./Search.module.css";
import React from "react";

const Search = () => {
    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" />
                <button>SEARCH</button>
            </div>
        </div>
    )
}

export default Search;
