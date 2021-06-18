import classes from "./Search.module.css";
import Snippets from "../Snippets/Snippets";
import React from "react";

const Search = () => {
    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" />
                <button>SEARCH</button>
            </div>
            <Snippets />
        </div>
    )
}

export default Search;
