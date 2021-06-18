import classes from "./Search.module.scss";
import Snippets from "../Snippets/Snippets";
import React from "react";

const Search = () => {
    const allSnipets = React.createRef();
    let isTimerStarted = false;
    let timerId;

    function showAllSnipets() {
        allSnipets.current.style.display = 'block';
    }

    function catchInputChanges() {
        isTimerStarted = true;
        if (isTimerStarted) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                showAllSnipets();
                isTimerStarted = false;
                clearTimeout(timerId);
            }, 1000);
        }
    }

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input type="text" onChange={catchInputChanges} />
                <button onClick={showAllSnipets}>SEARCH</button>
            </div>
            <Snippets buttonRef={allSnipets} />
        </div>
    )
}

export default Search;
