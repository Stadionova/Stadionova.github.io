import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React from "react";

const Search = () => {
    const allSnipets = React.createRef();

    function showAllSnipets() {
        allSnipets.current.style.display = 'block';
    }

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" />
                <button onClick={showAllSnipets}>SEARCH</button>
            </div>
            <Snippets buttonRef={allSnipets} />
        </div>
    )
}

export default Search;
